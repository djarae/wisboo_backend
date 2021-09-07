var Encuesta = require('../models/encuesta.model.js');

var mysql = require('mysql');
var express = require('express');

exports.crearEncuesta = function(req, res) {
    console.log("Entro a insertar encuesta nueva")


    console.log(req.body)


    console.log(req.body.form)

    console.log(req.body.form.questions[0].options)



//bd connection

    //Conectarse a bd
    var mysql = require('mysql');
    var pool  = mysql.createPool({
       connectionLimit : 10,
       host            : 'localhost',
       user            : 'root',
       password        : ''
     });

    for (let i =0;i<req.body.form.questions.length ;i++){
        pool.getConnection(function(err, connection){
            if(err){
                return (err);
            }
            connection.changeUser({database : "wisboo"});
            connection.query(`INSERT INTO questions (id,question_type,text,id_encuesta) VALUES( '${parseInt(req.body.form.questions[i].id)}',
            '${req.body.form.questions[i].question_type}',
            '${req.body.form.questions[i].text}',1);`, function(err, results){
                connection.release();
            });
        });

        for   (let j =0;j<req.body.form.questions[i].options.length ;j++){
            console.log("entro")
                        pool.getConnection(function(err, connection){
                            if(err){
                                return (err);
                            }
                            connection.changeUser({database : "wisboo"});
                            connection.query(`INSERT INTO options (id,id_question,text) VALUES( 
                            ${j},
                            '${parseInt(req.body.form.questions[i].id)}',
                            '${req.body.form.questions[i].options[j]}');`, function(err, results){
                                connection.release();
                            });
            });


        }


    }

};


// '${parseInt(req.body.form.questions.id)}',
// '${req.body.form.questions.question_type}',
// '${req.body.form.questions.text}',

