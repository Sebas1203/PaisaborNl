# Paisabor — El Sabor de Casa

Tienda gourmet y restaurante de cocina tradicional colombiana: despensa artesanal, menú de platos típicos y panel de administración.

## Estructura del repositorio

```
.
├── frontend/   # App web en Next.js (App Router) + React + TypeScript + Tailwind CSS v4
├── backend/    # Supabase: migraciones, seed y Edge Functions (pagos con Mollie)
└── docs/       # Documentación del proyecto
```

### Rutas del frontend

| Ruta                | Vista                     |
|---------------------|---------------------------|
| `/`                 | Redirige a `/catalogo`    |
| `/catalogo`         | Nuestra despensa          |
| `/catalogo/firmas`  | Platos típicos            |
| `/admin`            | Perfil del administrador  |
| `/admin/inventario` | Inventario                |

## Cómo correr el frontend

Requisitos: Node.js.

```bash
cd frontend
npm install
npm run dev
```

La app queda en http://localhost:3000.

Otros comandos, también desde `frontend/`:

- `npm run build`: build de producción
- `npm run start`: sirve el build de producción
- `npm run lint`: revisión de tipos con `tsc --noEmit`

Las variables de entorno del frontend están documentadas en `frontend/.env.example`. Solo se admiten variables `NEXT_PUBLIC_`; las claves secretas van en el backend (ver `backend/README.md`).
