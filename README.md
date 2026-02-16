# Around the U.S. - Full Stack Project

Este proyecto conecta el frontend (React) con el backend (Node.js/Express) para crear una aplicación web completa con autenticación de usuarios.

## Estructura del proyecto

- `backend/` - Servidor API con Node.js, Express y MongoDB
- `frontend/` - Aplicación React

## Tecnologías utilizadas

### Backend

- Node.js
- Express
- MongoDB con Mongoose
- JWT (autenticación)
- bcryptjs (encriptación de contraseñas)
- celebrate/Joi (validación)
- winston (logging)
- cors

### Frontend

- React
- React Router
- Vite

## Instalación y ejecución local

### Requisitos previos

- Node.js (v14 o superior)
- MongoDB instalado y corriendo

### Backend

```bash
cd backend
npm install
npm run dev
```

El servidor corre en `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación corre en `http://localhost:5173`

## Variables de entorno

Crear archivo `.env` en la carpeta `backend/` con:

```
NODE_ENV=production
JWT_SECRET=tu-clave-secreta-aqui
```

## Funcionalidades

- Registro de usuarios con email y contraseña
- Inicio de sesión con autenticación JWT
- Creación, edición y eliminación de tarjetas
- Edición de perfil de usuario
- Sistema de "me gusta" en tarjetas
- Protección de rutas con autenticación

## Dominios

- Frontend: https://laudable-spontaneity-production.up.railway.app
- Backend: https://webprojectapifull-production-a945.up.railway.app

## Autor

Esther Corona
