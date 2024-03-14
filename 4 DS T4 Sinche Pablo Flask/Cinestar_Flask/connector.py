import mysql.connector

def connectionDB():
  mydb= mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="cinestar"
  )
  if(mydb):
    print("conexion exitosa")
    return mydb
  else: 
    print("error el la conexion a la bd")