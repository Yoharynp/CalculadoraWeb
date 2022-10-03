const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesnumeros = document.querySelectorAll('.numero');
const botonesoperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)

botonesnumeros.forEach(boton =>{
    boton.addEventListener("click",() => display.AddNumber(boton.innerHTML));
});


botonesoperadores.forEach(boton =>{
    boton.addEventListener("click", () => display.computar(boton.value))
});



if(typeof localStorage === 'undefined'){
    console.log('Browser not supported')
}



