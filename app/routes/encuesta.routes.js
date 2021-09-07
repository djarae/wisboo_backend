module.exports = function(app) {
    var bodyParser = require('body-parser');
    var encuesta = require('../controllers/encuesta.controller.js');

    // Retrieve all encuesta
    app.post('/encuestas', encuesta.crearEncuesta);
    
}