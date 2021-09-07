var express = require('express');
var bodyParser = require('body-parser');
//create express app
var app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Bienvenido a la app para organizar productos."});
});


app.use(bodyParser.json()); // body en formato json


require('./app/routes/encuesta.routes.js')(app);

// listen for requests
app.listen(5000, function(){
    console.log("Server is listening on port 5000");
});


