# API-Node-Js-Auth

## Descripción

**API-Node-Js-Auth** es una API desarrollada en **Node.js** que implementa funcionalidades de autenticación y autorización para gestionar el acceso a recursos protegidos. Este proyecto tiene como objetivo proporcionar una base sólida para aplicaciones que requieran control de acceso basado en roles y manejo seguro de usuarios.

## 📌 Índice

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## 🚀 Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1️⃣ Clona el repositorio:

```bash
git clone https://github.com/Liagiba03/API-Node-Js-Auth-.git
```

### 2️⃣ Navega al directorio del proyecto:

```bash
cd API-Node-Js-Auth-
```

### 3️⃣ Instala las dependencias:

```bash
npm install
```
### 4️⃣ Configura las variables necesarias:
```env
PORT=3000
URL= "mongodb://admin:password@localhost:27017/"
```

### 5️⃣ Crea la imagen de docker
```bash
docker compose up -d
```
### 6️⃣ Inicia la aplicación:

- En **modo desarrollo**:

  ```bash
  npm run dev
  ```
- En **modo producción**:

  ```bash
  npm start
  ```
## 🛠 Uso

Una vez que la API esté en ejecución, puedes interactuar con ella usando **Postman**, **cURL**, o cualquier cliente HTTP.

### 🔹 Registro de usuario:

```http
POST /api/auth/register
```

**Cuerpo de la solicitud (JSON):**

```json
{
  "username": "nombre_de_usuario",
  "password": "contraseña_segura"
}
```
### 🔹 Inicio de sesión:

```http
POST /api/auth/login
```

**Cuerpo de la solicitud (JSON):**

```json
{
  "username": "nombre_de_usuario",
  "password": "contraseña_segura"
}
```
### 🔹 Acceso a recurso protegido:

```http
GET /api/protected
```

**Encabezados:**

```json
{
  "Authorization": "Bearer token_de_acceso"
}
```
