from flask import Flask, jsonify, request
from connector_Api_Flask import connectionDB

app = Flask(__name__)

def execute_query(query, params=None):
    conexion = connectionDB()

    if not conexion:
        return "Error al conectar base de datos"

    try:
        cursor = conexion.cursor()

        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)

        resultados = cursor.fetchall()

        cursor.close()
        conexion.close()

        columnas = [columna[0] for columna in cursor.description]
        resultados_json = [dict(zip(columnas, fila)) for fila in resultados]

        return jsonify(resultados_json)
    except:
        return "Error en la consulta"

@app.route('/cine')
def get_cines():
    query = "CALL sp_getCines()"
    return execute_query(query)

@app.route('/cine/<cine_id>')
def get_cine(cine_id):
    query = "CALL sp_getCine(%s)"
    return execute_query(query, (cine_id,))

@app.route('/cine/<cine_id>/tarifas')
def get_cine_tarifas(cine_id):
    query = "CALL sp_getCineTarifas(%s)"
    return execute_query(query, (cine_id,))

@app.route('/cine/<cine_id>/peliculas')
def get_cine_peliculas(cine_id):
    query = "CALL sp_getCinePeliculas(%s)"
    return execute_query(query, (cine_id,))

@app.route('/peliculas/<pelicula_id>')
def get_peliculas(pelicula_id): 
    query = "CALL sp_getPeliculas(%s)"
    return execute_query(query, (pelicula_id,))

@app.route('/pelicula/<pelicula_id>')
def get_pelicula(pelicula_id):
    query = "CALL sp_getPelicula(%s)"
    return execute_query(query, (pelicula_id,))

if __name__ == '__main__':
    app.run(debug=True)