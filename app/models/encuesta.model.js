var mongoose = require('mongoose');

var EncuestaSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Encuesta', EncuestaSchema);
