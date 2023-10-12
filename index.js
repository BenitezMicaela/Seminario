//import sequelize from 'sequelize';
import {Localidad,Genero,NivelEstudio,Pregunta,Respuesta,Encuesta,RespuestaEncuesta} from 'modelos_base.js'; 

//const { Sequelize } = require('sequelize');
const express = require('express');//Cargar la librería
const app = express();//cargar métodos en la variable app.
const bodyParser = require('body-parser');//cargar el body con el formulario

app.use(bodyParser.urlencoded({ extended: false }))// for parsing application/json/text

//Para la ruta raíz, cuando la petición sea GET, devuelve un string (res.send('hello world');)
//req - lo que me envíen por esa ruta al servidor.
//res - lo que responde el servidor.
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/formulario.html');
});

//puerto por el que espera la petición
app.listen(3000,()=>{console.log('Recibiendo...')});

app.post('/', function(req, res) {
    console.log(req.body);
});
/*
// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://micaela_benitez:ubvL6NcB7GpaXOPzMSnHDOtYORMFiQ3C@dpg-ckf1v6unpffc73b2amgg-a/seminario_1') //Internal Command

try {
  await sequelize.authenticate();
  console.log('Conexión exitosa.');
} catch (error) {
  console.error('No se puede conectar a la base de datos.', error);
}

sequelize.sync({ force: true});
*/
