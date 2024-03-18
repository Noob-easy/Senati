from fastapi import FastAPI, HTTPException
import mysql.connector

app = FastAPI()

config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'cinestar'
}

configRemota = {
    'host': 'srv1101.hstgr.io',
    'user': 'u584908256_cinestar',
    'password': 'Senati2023@',
    'database': 'u584908256_cinestar'
}

def connectionDB(config: dict):
    try:
        mydb = mysql.connector.connect(**config)
        return mydb
    except mysql.connector.Error as err:
        return None

def execute_query(query, params=None, config=config):
    conexion = connectionDB(config)

    if not conexion:
        raise HTTPException(status_code=500, detail="Error al conectar base de datos")

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

        return resultados_json
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Error en la consulta")

@app.get('/cine')
def get_cines():
    query = "CALL sp_getCines()"
    return execute_query(query, config=configRemota)

@app.get('/cine/{cine_id}')
def get_cine(cine_id: int):
    query = "CALL sp_getCine(%s)"
    return execute_query(query, (cine_id,), config=configRemota)

@app.get('/cine/{cine_id}/tarifas')
def get_cine_tarifas(cine_id: int):
    query = "CALL sp_getCineTarifas(%s)"
    return execute_query(query, (cine_id,), config=configRemota)

@app.get('/cine/{cine_id}/peliculas')
def get_cine_peliculas(cine_id: int):
    query = "CALL sp_getCinePeliculas(%s)"
    return execute_query(query, (cine_id,), config=configRemota)

@app.get('/peliculas/{pelicula_id}')
def get_peliculas(pelicula_id: int):
    query = "CALL sp_getPeliculas(%s)"
    return execute_query(query, (pelicula_id,), config=configRemota)

@app.get('/pelicula/{pelicula_id}')
def get_pelicula(pelicula_id: int):
    query = "CALL sp_getPelicula(%s)"
    return execute_query(query, (pelicula_id,), config=configRemota)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)