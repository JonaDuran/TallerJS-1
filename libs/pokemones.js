const pokemonDB = require('./pokemonDB.json');

const pokemones = {
  
  obtenerTodos() {
    return pokemonDB;
  },
  
  obtener(id) {
    return pokemonDB
      .find(pokemon => pokemon.number == id);
  },
  
  insertar() {
    // ...
  }
  
};

module.exports = pokemones;