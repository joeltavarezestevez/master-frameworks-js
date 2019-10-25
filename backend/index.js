'use strict'

var mongoose = require('mongoose');

var url = 'mongodob://localhost:27017/api_rest_blog';
var opciones = { useNewUrlParser: true };

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true }).then(() => {
	console.log('La conexion a la base de datos se ha realizado correctamente!!!.');
})