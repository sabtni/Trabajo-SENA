from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
import mysql.connector

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'clave_secreta'

jwt = JWTManager(app)

# Conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="5062003",
    database="rincongourmet"
)
cursor = db.cursor()

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    sql = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
    cursor.execute(sql, (data['name'], data['email'], data['password']))
    db.commit()
    return jsonify({'message': 'Usuario registrado correctamente'})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    sql = "SELECT * FROM users WHERE email = %s AND password = %s"
    cursor.execute(sql, (data['email'], data['password']))
    user = cursor.fetchone()
    if user:
        access_token = create_access_token(identity=data['email'])
        return jsonify(access_token=access_token)
    return jsonify({'message': 'Credenciales incorrectas'}), 401

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({'message': 'Acceso autorizado'})

if __name__ == '__main__':
    app.run(debug=True)
