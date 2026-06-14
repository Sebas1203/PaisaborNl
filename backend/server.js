const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { sql, config } = require('./database/conexion');

const app  = express();
const PORT = 3000;

const EVENTOS_PATH = path.join(__dirname, 'data', 'eventos.json');

app.use(express.json());
app.use(express.static(path.join(__dirname,'..', 'frontend-original', 'public')));

// ====== CONFIG SQL ======


// ====== HELPERS JSON ======
function leerEventos() {
  if (!fs.existsSync(EVENTOS_PATH)) return [];
  return JSON.parse(fs.readFileSync(EVENTOS_PATH, 'utf-8'));
}

function guardarEventos(eventos) {
  fs.writeFileSync(EVENTOS_PATH, JSON.stringify(eventos, null, 2), 'utf-8');
}

// ====== PRODUCTOS ======
app.get('/api/productos', async (req, res) => {
  try {
    const pool     = await sql.connect(config);
    const request  = pool.request();
    const categoria = req.query.categoria;

    let query = 'SELECT * FROM dbo.productos';

    if (categoria) {
      query += ' WHERE id_categoria = @categoria';
      request.input('categoria', sql.Int, parseInt(categoria));
    }

    const result = await request.query(query);
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al consultar productos:', error);
    res.status(500).json({ error: error.message });
  }
});

// ====== CATEGORÍAS ======
app.get('/api/categorias', async (req, res) => {
  try {
    const pool   = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM dbo.categorias');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al consultar categorías:', error);
    res.status(500).json({ error: error.message });
  }
});

// ====== EVENTOS ======
app.get('/api/eventos', (req, res) => {
  res.json(leerEventos());
});

app.post('/api/eventos', (req, res) => {
  const { titulo, fecha, lugar, descripcion, imagen } = req.body;

  if (!titulo || !fecha || !lugar || !descripcion) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const eventos    = leerEventos();
  const nuevoId    = eventos.length > 0 ? Math.max(...eventos.map(e => e.id)) + 1 : 1;
  const nuevoEvento = { id: nuevoId, titulo, fecha, lugar, descripcion, imagen: imagen || '/imagenes/default.jpg' };

  eventos.push(nuevoEvento);
  guardarEventos(eventos);

  res.status(201).json(nuevoEvento);
});

app.delete('/api/eventos/:id', (req, res) => {
  const id      = parseInt(req.params.id);
  const eventos = leerEventos();
  const filtrados = eventos.filter(e => e.id !== id);

  if (filtrados.length === eventos.length) {
    return res.status(404).json({ error: 'Evento no encontrado' });
  }

  guardarEventos(filtrados);
  res.json({ mensaje: 'Evento eliminado correctamente' });
});

// ====== SERVIDOR ======
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const multer    = require('multer');
const jwt       = require('jsonwebtoken');
const bcrypt    = require('bcryptjs');
const cookieParser = require('cookie-parser');

const JWT_SECRET = 'paisabor_secret_2025'; // cámbialo por algo seguro

// Usuario admin (en producción esto iría en BD)
// Genera el hash una vez con: bcryptjs.hashSync('tu_contrasena', 10)
const ADMIN = {
    usuario:    'admin',
    contrasena: bcrypt.hashSync('paisabor2025', 10)
};

// Multer — guardar imágenes en public/imagenes/productos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'imagenes', 'productos'));
    },
    filename: (req, file, cb) => {
        const ext      = path.extname(file.originalname);
        const nombre   = Date.now() + ext;
        cb(null, nombre);
    }
});
const upload = multer({ storage });

app.use(cookieParser());

// ====== MIDDLEWARE AUTH ======
function requireAuth(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'No autorizado' });
    try {
        jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ error: 'Token inválido' });
    }
}

// ====== LOGIN ======
app.post('/api/login', async (req, res) => {
    const { usuario, contrasena } = req.body;
    if (usuario !== ADMIN.usuario || !bcrypt.compareSync(contrasena, ADMIN.contrasena)) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    const token = jwt.sign({ usuario }, JWT_SECRET, { expiresIn: '8h' });
    res.cookie('token', token, { httpOnly: true, maxAge: 8 * 60 * 60 * 1000 });
    res.json({ ok: true });
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ ok: true });
});

app.get('/api/auth-check', requireAuth, (req, res) => {
    res.json({ ok: true });
});

// ====== POST PRODUCTO ======
app.post('/api/productos', requireAuth, upload.single('imagen'), async (req, res) => {
    const { nombre, descripcion, precio_venta, stock_actual, id_categoria } = req.body;
    const imagen = req.file ? `/imagenes/productos/${req.file.filename}` : '/imagenes/default.jpg';

    try {
        const pool = await sql.connect(config);
        await pool.request()
            .input('nombre',       sql.NVarChar, nombre)
            .input('descripcion',  sql.NVarChar, descripcion)
            .input('precio_venta', sql.Decimal,  parseFloat(precio_venta))
            .input('stock_actual', sql.Int,      parseInt(stock_actual))
            .input('id_categoria', sql.Int,      parseInt(id_categoria))
            .input('imagen',       sql.NVarChar, imagen)
            .query(`INSERT INTO dbo.productos
                    (nombre, descripcion, precio_venta, stock_actual, id_categoria, imagen)
                    VALUES (@nombre, @descripcion, @precio_venta, @stock_actual, @id_categoria, @imagen)`);

        res.status(201).json({ ok: true });
    } catch (error) {
        console.error('Error al insertar producto:', error);
        res.status(500).json({ error: error.message });
    }
});

// ====== DELETE PRODUCTO ======
app.delete('/api/productos/:id', requireAuth, async (req, res) => {
    try {
        const pool = await sql.connect(config);
        await pool.request()
            .input('id', sql.Int, parseInt(req.params.id))
            .query('DELETE FROM dbo.productos WHERE id_producto = @id');
        res.json({ ok: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});