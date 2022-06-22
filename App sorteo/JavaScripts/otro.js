// querySelector
document.querySelector("#btn-sortear").addEventListener("click", sortear)
// Parseando el LS
let personas = JSON.parse(localStorage.getItem('lista'))


// Creando la funcion de sorteo
function sortear(){
    let random = Math.floor(Math.random() * personas.length)
    let mostrar = document.querySelector(".resultadoSorteo")
    
    mostrarHtml(mostrar, personas[random])
    
}

// Creamos funcion para que se vea la lista en el otro HTML 

function mostrarLista(){
    let mostrar = document.querySelector(".lista")
    mostrar.innerHTML = ""
    
    for (let elementoActual of personas)
    mostrar.innerHTML += "<li>" + elementoActual + "</li>"
    
}
// LLamamos a la funcion
mostrarLista()

// creando la funcion para mostrar en el HTML
function mostrarHtml(objeto, _funcion){
    objeto.innerHTML = ""
    objeto.innerHTML += _funcion
}








