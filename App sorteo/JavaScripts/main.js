// JavaScript

// querySelector
document.querySelector("#btn-agregar").addEventListener("click", agregar)
document.querySelector("#btn-vaciar").addEventListener("click", vaciar)



// declaramos array
let personas = []

// creamos la funcion para agregar 

function agregar(){
    let nombre = document.querySelector("#nombre")
    personas.push(nombre.value)
    
    let personasJSON = JSON.stringify(personas)
    localStorage.setItem('lista', personasJSON)
    
    mostrarLista()


    nombre.value = " "
}

// creamos la funcion para vaciar el array

function vaciar(){
    personas = []
    let mostrar = document.querySelector(".lista")
    mostrarHtml(mostrar, personas)
    localStorage.removeItem("lista")
    
}

// creamos funcion para que se muestre en el DOM
function mostrarLista(){
    let mostrar = document.querySelector(".lista")
    mostrar.innerHTML = ""
    
    for (let elementoActual of personas)
    mostrar.innerHTML += "<li>" + elementoActual + "</li>"
    
}


// creamos la funcion para mostrar el HTML
function mostrarHtml(objeto, _funcion){
    objeto.innerHTML = ""
    objeto.innerHTML += _funcion
}






