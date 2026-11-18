# UpTask — Frontend

SPA de **UpTask**, una aplicación de administración de proyectos y tareas (estilo Kanban) construida con React 19, TypeScript y Vite. Consume la API REST del [backend de UpTask](../uptask_backend).

## Funcionalidades

- Autenticación completa: registro, confirmación de cuenta por código, inicio de sesión, recuperación y cambio de contraseña.
- Gestión de proyectos: crear, editar, eliminar y listar proyectos.
- Tablero de tareas con **drag & drop** entre estados (`pending`, `onHold`, `inProgress`, `underReview`, `completed`).
- Gestión de equipos: búsqueda de usuarios por email, alta/baja de miembros por proyecto.
- Notas/comentarios dentro de cada tarea.
- Perfil de usuario: edición de datos y cambio de contraseña.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** como bundler
- **React Router v7** para el ruteo
- **TanStack Query** para el manejo de estado del servidor (fetching, caché, invalidación)
- **React Hook Form** + **Zod** para formularios y validación de esquemas
- **Tailwind CSS 4** para estilos
- **dnd-kit** para el drag & drop del tablero
- **Axios** para las llamadas HTTP
- **React Toastify** para notificaciones

## Estructura del proyecto

```
src/
├── api/          # Llamadas HTTP agrupadas por entidad (Auth, Project, Task, Team, Note, Profile)
├── components/   # Componentes organizados por dominio (auth, projects, tasks, team, notes, profile)
├── views/        # Pantallas asociadas a cada ruta
├── layouts/      # AppLayout, AuthLayout, ProfileLayout
├── hooks/        # Hooks reutilizables (useAuth)
├── lib/          # Configuración de Axios
├── types/        # Esquemas y tipos (Zod)
├── locales/      # Textos en español
├── router.tsx    # Definición de rutas
└── main.tsx      # Punto de entrada
```

## Puesta en marcha

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear un archivo `.env.local` con la URL de la API:

   ```
   VITE_API_URL=http://localhost:4000
   ```

3. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Scripts disponibles

| Script            | Descripción                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Levanta el servidor de desarrollo (Vite)  |
| `npm run build`     | Compila TypeScript y genera el build      |
| `npm run lint`      | Corre ESLint sobre el proyecto            |
| `npm run preview`   | Sirve el build de producción localmente   |

## Despliegue

Configurado para desplegarse en **Vercel** (`vercel.json`) como SPA, redirigiendo cualquier ruta sin extensión a `index.html` para que React Router maneje el enrutamiento del lado del cliente.

## Proyecto relacionado

- [UpTask Backend](../uptask_backend) — API REST en Node.js, Express y MongoDB que da soporte a esta aplicación.
