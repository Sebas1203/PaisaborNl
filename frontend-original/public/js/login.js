app.post('/api/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const pool = await sql.connect(config);

    const result = await pool.request()
      .input('usuario', sql.VarChar, usuario)
      .query(`
        SELECT TOP 1 *
        FROM usuarios
        WHERE correo = @usuario
      `);

    if (result.recordset.length === 0) {
      return res.status(401).json({ mensaje: 'Usuario no encontrado' });
    }

    const usuarioDB = result.recordset[0];

    const coincide = await bcrypt.compare(contrasena, usuarioDB.contrasena);

    if (!coincide) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: usuarioDB.id_usuario,
        correo: usuarioDB.correo,
        rol: usuarioDB.id_rol
      },
      'clave_secreta_super_segura',
      { expiresIn: '2h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax'
    });

    res.json({ mensaje: 'Login correcto' });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});