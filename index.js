const express = require('express');//Cargar la librería
const app = express();//cargar métodos en la variable app.
const bodyParser = require('body-parser');

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

app.use(bodyParser.urlencoded({ extended: false }))// for parsing application/json/tex