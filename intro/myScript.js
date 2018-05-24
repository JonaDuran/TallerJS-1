function tituloClick() {
  alert('Hola JavaScript xD');
}

window.onload = function() {
  eventosFormulario();
  eventosRaton();
};

function eventosRaton(event) {
  const raton = document.querySelector('#raton');
  
  document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    
    raton.innerHTML = `
      X: ${x}
      <br/>
      Y: ${y}
    `;
    
    raton.innerHTML = 
      'X: ' + x +
      '<br/>' +
      'Y: ' + y
  });
}

function eventosFormulario() {
  // console.log('Imprimo en consola');
  const formulario = document.querySelector('form');
  const numeros = document.querySelectorAll('.numero');
  const resultado = document.querySelector('#resultado');
  // console.log(formulario, numeros, resultado);
  
  numeros[0].focus();
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let total = 0;
    
    for (let i = 0; i < numeros.length; i++) {
      total += Number(numeros[i].value);
    }
    
    if (total > 0) {
      resultado.textContent = total;
    } else {
      resultado.innerHTML = '<b>CERO</b>';
    }
    
  });
};