const contenido = document.querySelector('#contenido');
const buscar = document.querySelector('#buscar');
// console.log(pokemonDB);

http.get('/pokemones/obtenerTodos', function(pokemonDB) {
  const pokemones = [];

  for (const pokemonData of pokemonDB) {
    pokemones.push(new Pokemon(pokemonData));
  }

  contenido.innerHTML = crearContenidoHtml(pokemones);

  buscar.addEventListener('input', function(event) {
    const buscar = event.target.value;
    contenido.innerHTML = crearContenidoHtml(pokemones, buscar);
  });
});

function crearContenidoHtml(pokemones, buscar) {
  let contenidoHtml = '';
  
  for (const pokemon of pokemones) {
    if (!buscar || pokemon.incluye(buscar)) {
      contenidoHtml += pokemon.creaHtml();
    }
  }
  
  return contenidoHtml;
}