# Addlegal/Addveritas Web

Aplicación web moderna para una plataforma jurídica y académica enfocada en estudiantes de Derecho. Incluye páginas informativas, planes de tutoría, eventos, Café Jurídico, contacto e inscripción conectada a Supabase.

## Stack

- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- Supabase

## Estructura

```txt
src/
  app/              Rutas de Next.js App Router
  components/       Componentes reutilizables
  data/             Datos mock editables
  lib/              Integraciones y utilidades
  styles/           Estilos globales Tailwind
```

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Variables de entorno

Crea un archivo `.env.local` a partir de `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=optional-server-only-service-role-key
NEXT_PUBLIC_WHATSAPP_NUMBER=50200000000
```

`SUPABASE_SERVICE_ROLE_KEY` es opcional, pero recomendado para que la ruta API pueda insertar inscripciones desde servidor sin depender de políticas públicas de inserción.

## Tabla de Supabase

Crea la tabla `inscripciones` con este SQL inicial:

```sql
create table if not exists public.inscripciones (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  university text not null,
  plan text not null,
  preferred_modality text not null,
  message text,
  created_at timestamptz not null default now()
);
```

Si usas solo `NEXT_PUBLIC_SUPABASE_ANON_KEY`, habilita Row Level Security y agrega una política de inserción adecuada. Si usas `SUPABASE_SERVICE_ROLE_KEY`, mantenla únicamente en `.env.local` y nunca la expongas en el cliente.

## Datos mock

Los planes, eventos, navegación y redes están en:

```txt
src/data/site.ts
```

Puedes cambiar precios, fechas, temas y enlaces desde ese archivo.

## Scripts

```bash
npm run dev        # servidor local
npm run build      # build de producción
npm run start      # servir build
npm run typecheck  # validar TypeScript
```
