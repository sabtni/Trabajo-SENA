# api.py

from flask import Flask, request, jsonify
import mysql.connector
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)

# Configuración de la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="5062003",
    database="rincongourmet"
)
cursor = db.cursor()

# Configuración de JWT
app.config['JWT_SECRET_KEY'] = 'supersecreto'
jwt = JWTManager(app)

# Endpoint para login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['email'] == 'admin@gmail.com' and data['password'] == '12345':
        token = create_access_token(identity=data['email'])
        return jsonify(access_token=token)
    return jsonify({'message': 'Credenciales incorrectas'}), 401

# Crear usuario (POST /users)
@app.route('/users', methods=['POST'])
@jwt_required()
def create_user():
    data = request.json
    sql = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
    cursor.execute(sql, (data['name'], data['email'], data['password']))
    db.commit()
    return jsonify({'message': 'Usuario creado'}), 201

# Obtener todos los usuarios (GET /users)
@app.route('/users', methods=['GET'])
@jwt_required()
def get_users():
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users)

# Actualizar un usuario (PUT /users/<id>)
@app.route('/users/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    data = request.json
    sql = "UPDATE users SET name=%s, email=%s, password=%s WHERE idusers=%s"
    cursor.execute(sql, (data['name'], data['email'], data['password'], user_id))
    db.commit()
    return jsonify({'message': 'Usuario actualizado'})

# Eliminar un usuario (DELETE /users/<id>)
@app.route('/users/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    cursor.execute("DELETE FROM users WHERE idusers=%s", (user_id,))
    db.commit()
    return jsonify({'message': 'Usuario eliminado'})

if __name__ == '__main__':
    app.run(debug=True)


# README.md

"""
# Proyecto API - Registro e Inicio de Sesión

## Descripción del Proyecto

Este proyecto es una API REST desarrollada con Flask para el registro y autenticación de usuarios. Utiliza JWT para la autenticación y MySQL como base de datos.

## Requisitos Previos

- Python 3.x
- Flask
- Flask-JWT-Extended
- MySQL
- Postman u otra herramienta para probar la API

## Instalación

1. Clonar el repositorio:
```bash
git clone <enlace-del-repositorio>
```

2. Instalar dependencias:
```bash
pip install flask flask-jwt-extended mysql-connector-python
```

3. Configurar la base de datos MySQL:
```sql
CREATE DATABASE rincongourmet;
CREATE TABLE users (
    idusers INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);
```

4. Ejecutar la aplicación:
```bash
python api.py
```

## Uso de la API

### Autenticación (Login)
```bash
POST /login
```
Body JSON:
```json
{
    "email": "admin@gmail.com",
    "password": "12345"
}
```

### Crear Usuario
```bash
POST /users
```
Header: Authorization: Bearer <token>
Body JSON:
```json
{
    "name": "Usuario",
    "email": "usuario@example.com",
    "password": "segura123"
}
```

### Obtener Todos los Usuarios
```bash
GET /users
```
Header: Authorization: Bearer <token>

### Actualizar Usuario
```bash
PUT /users/<user_id>
```
Header: Authorization: Bearer <token>
Body JSON:
```json
{
    "name": "Nuevo Nombre",
    "email": "nuevo@example.com",
    "password": "nueva123"
}
```

### Eliminar Usuario
```bash
DELETE /users/<user_id>
```
Header: Authorization: Bearer <token>

"""
