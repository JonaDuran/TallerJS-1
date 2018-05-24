class Pokemon {
  
  constructor(pokemonData) {
    this.id = pokemonData.number;
    this.nombre = pokemonData.name;
    this.imagen = '../images/' 
      + (pokemonData.keyName 
      || pokemonData.name.toLowerCase()) 
      + '.jpg';
  }
  
  incluye(texto) {
    const nombre = this.nombre.toLowerCase();
    texto = texto.toLowerCase();
    
    return nombre.includes(texto);
  }
  
  creaHtml() {
    return `
      <div class="pokemon">
        <span>${this.nombre}</span>
        <img src="${this.imagen}"/>
      </div>
    `;
    // return '<div class="pokemon">' +
    //     '<span>' + this.nombre + '</span>' +
    //     '<img src="' + this.imagen + '"/>' +
    //   '</div>';
  }
  
}