const express = require('express');
const bodyParser = require('body-parser');
const pokemones = require('./libs/pokemones');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use('/images', express.static('images'));

app.get('/pokemones/obtenerTodos', function(req, res) {
  console.log('/pokemones/obtenerTodos');
  res.json(pokemones.obtenerTodos());
});

app.post('/pokemones/obtener', function(req, res) {
  console.log('/pokemones/obtener');
  res.json(pokemones.obtener(req.body.id));
});

app.listen(8080, function() {
  console.log('Corriendo en el puerto 8080');
});