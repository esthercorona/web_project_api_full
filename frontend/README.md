# Tripleten web_project_around_auth

## Descripción del Proyecto

Around Japan es una aplicación web interactiva que permite a los usuarios compartir sus experiencias de viaje por Japón. Los usuarios pueden registrarse, iniciar sesión, crear un perfil personalizado con avatar, y compartir tarjetas con imágenes de lugares que han visitado.

## Funcionalidad

- **Autenticación de usuarios**: Registro e inicio de sesión con JWT
- **Perfil de usuario personalizable**: Editar nombre, descripción y foto de perfil
- **Gestión de tarjetas**: Agregar, eliminar y dar "me gusta" a tarjetas de lugares
- **Visualización de imágenes**: Vista ampliada de imágenes al hacer clic
- **Persistencia de sesión**: Los usuarios permanecen autenticados al recargar la página
- **Rutas protegidas**: Solo usuarios autenticados pueden acceder al contenido principal
- **Diseño responsivo**: Adaptado para móvil, tablet y escritorio

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario
- **React Router DOM**: Navegación y rutas en aplicación de página única
- **Vite**: Herramienta de compilación rápida para desarrollo
- **JavaScript ES6+**: Características modernas de JavaScript
- **CSS3**: Estilos con metodología BEM
- **API REST**: Comunicación con backend para autenticación y datos
- **LocalStorage**: Almacenamiento local de tokens JWT
- **Context API**: Gestión de estado global del usuario

## Instalación y Uso

```bash
npm install
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── App.jsx
│   ├── Header/
│   ├── Footer/
│   ├── Main/
│   ├── Login/
│   ├── Register/
│   ├── ProtectedRoute/
│   └── InfoTooltip/
├── contexts/
│   └── CurrentUserContext.js
├── utils/
│   ├── api.js
│   └── auth.js
├── images/
└── index.css
```

## Enlace al Proyecto

https://github.com/esthercorona/web_project_around_auth

## Autor

Esther Corona
