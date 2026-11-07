# Backend — Paisabor

Esta carpeta contiene la parte de servidor de Paisabor, basada en [Supabase](https://supabase.com). Aún no tiene lógica: es la estructura donde irá el backend.

```
backend/
└── supabase/
    ├── migrations/          # Migraciones SQL del esquema de la base de datos
    ├── functions/
    │   ├── create-payment/  # Edge Function: crea el pago en Mollie y devuelve la URL de checkout
    │   └── mollie-webhook/  # Edge Function: recibe los avisos de Mollie y actualiza el pedido
    └── seed.sql             # Datos iniciales para desarrollo
```

## Claves secretas

Las claves privadas (por ejemplo la de Mollie o la `service_role` de Supabase) se guardan como secretos de Supabase y solo las usan las Edge Functions. Nunca van en `frontend/`, que solo admite variables `NEXT_PUBLIC_`.
