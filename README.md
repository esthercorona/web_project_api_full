# Around the U.S. - Full Stack Project

Este proyecto conecta el frontend (React) con el backend (Node.js/Express) para crear una aplicación web completa con autenticación de usuarios.

## Estructura del proyecto

- `backend/` - Servidor API con Node.js, Express y MongoDB
- `frontend/` - Aplicación React

## Tecnologías utilizadas

### Backend

- Node.js
- Express
- MongoDB
- JWT (autenticación)
- bcryptjs (encriptación de contraseñas)
- celebrate/Joi (validación)
- winston (logging)

### Frontend

- React
- React Router
- Vite

## Instalación y ejecución

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

## Dominio del proyecto

Dominio del backend: (agregar cuando esté desplegado)
Dominio del frontend: (agregar cuando esté desplegado)
