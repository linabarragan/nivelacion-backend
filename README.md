# 🎼 Gestión de Instructores - Backend

Este proyecto es el backend del sistema de gestión de instructores para una escuela de música. Está desarrollado con **AdonisJS v6** y expone una API RESTful para administrar instructores y los instrumentos que enseñan.

---

## 🚀 Tecnologías Utilizadas

- [AdonisJS v6](https://docs.adonisjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [VineJS](https://vinejs.dev/) para validaciones
- [Lucid ORM](https://docs.adonisjs.com/guides/database/introduction)

---

## ⚙️ Instalación del proyecto

- 1. Clonar el repositorio
git clone https://github.com/tu-usuario/nivelacion-backend.git
cd nivelacion-backend

- 2. Instalar dependencias
npm install

- 3. Configurar el entorno
cp .env.example .env
Editar variables de conexión a la base de datos en .env

- 4. Ejecutar migraciones
node ace migration:run

- 5. Iniciar el servidor en desarrollo
node ace serve --watch

## 🔐 Variables de entorno
Asegúrate de configurar tu .env con estos valores:

PORT=3333
HOST=127.0.0.1
APP_KEY=GENERATED_APP_KEY
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=instructores_db

## 📦 Estructura del proyecto

.
├── app/
│   ├── controllers/       # Lógica de controladores HTTP
│   ├── models/            # Modelos ORM (Instructor, Instrumento)
│   └── validators/        # Validaciones VineJS
├── config/                # Configuración de base de datos y otras
├── database/
│   └── migrations/        # Archivos de migración de tablas
├── start/                 # Archivos de arranque del servidor
├── .env                   # Variables de entorno
└── package.json           # Dependencias y scripts

## 🧰 Endpoints principales

| Método | Ruta                                 | Descripción                   |
| ------ | ------------------------------------ | ----------------------------- |
| GET    | /api/instructores                    | Listar todos los instructores |
| POST   | /api/instructores                    | Crear un nuevo instructor     |
| PATCH  | /api/instructores/\:id               | Actualizar instructor         |
| DELETE | /api/instructores/\:id               | Eliminar instructor           |
| PUT    | /api/instructores/\:id/toggle-activo | Activar/Inactivar instructor  |
| GET    | /api/instrumentos                    | Obtener lista de instrumentos |

## ✅ Funcionalidades implementadas
Registro y edición de instructores

Asignación de múltiples instrumentos por instructor

Activación/inactivación lógica (soft toggle)

Eliminación definitiva

Validaciones con VineJS

Migraciones automáticas para tablas




