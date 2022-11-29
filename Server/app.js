var express = require('express');
const res = require('express/lib/response'); //Se crea sola si es necesario (regularmente no se crea)
var morgan = require('morgan');
var app= express();


app.use(morgan('dev')); //me muestra en consola que acción hizo el servidor
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, function () {
    console.log('app nueva escuchando en el puerto 8080');
})

var incremental = 0
global.inc = 1


app.get('/', function(req, res) {
    incremental++; //agrego aqui pcomo prueba
    res.json({mensaje: "hola mundo"})
})

app.get('/getIncremental', function(req, res) {
    res.json({inc: inc})
})

app.get('/retornoTexto', function(req, res) {
    res.send('este mensaje esta en texto')
})

app.post('/setIncremental', function(req, res){
    global.inc= req.body.dato //dato es lo que debo colocar en el json desde el post para indicar que es lo que voy a capturar
    var texto= req.body.texto
    res.json({ msg: "operacion con exito" })
    
})

//app.delete para eliminar datos
//app.put solo para cambiar un dato que ya esta
//estos son parametros en javascript
