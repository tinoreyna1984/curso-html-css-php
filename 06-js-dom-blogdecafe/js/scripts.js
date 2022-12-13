// querySelector

const contenedor = document.querySelector('.contenedor');
console.log(contenedor);
const heading = document.querySelector(".header__texto h2")
console.log(heading)
console.log(heading.textContent)
console.log(heading.classList)

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces)
console.log(enlaces[1])

// generar un nuevo enlace

const nuevoEnlace = document.createElement("A"); // el tipo de elemento en mayúscula
nuevoEnlace.href = "https://google.com"; // dirección
nuevoEnlace.textContent = "Ir a Google"; // texto
nuevoEnlace.classList.add("navegacion__enlace"); // agregar clase
console.log(nuevoEnlace);
// agrego nuevoEnlace a la barra de navegación
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

// Eventos

console.log("1")
window.addEventListener("load", () => console.log("2"))
window.onload = () => console.log("3");
document.addEventListener("DOMContentLoaded", () => console.log("4"));
console.log("5")
// El orden de carga es: console.log, document.addEventListener y window.addEventListener


// Reacción a clicks

/* const pasarEvento = (e) => {
    console.log(e)
    e.preventDefault();
}
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", pasarEvento); */

// Eventos de los inputs y textArea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const leerTexto = (e) => {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    //console.log(datos)
}
nombre.addEventListener("input", (e) => leerTexto(e))
email.addEventListener("input", (e) => leerTexto(e))
mensaje.addEventListener("input", (e) => leerTexto(e))

// Eventos en formularios

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const {nombre, email, mensaje} = datos;

    if(nombre.length < 1 || email.length < 1 || mensaje.length < 1){
        alerta("Todos los campos son obligatorios", "error");
        return;
    }

    alerta("Se enviaron datos con éxito")

})

const alerta = (msg, tipo = "correcto") => {
    const alerta = document.createElement("p");
    alerta.textContent = msg;
    alerta.classList.add(tipo);
    formulario.appendChild(alerta)
    setTimeout(() => {
        $("." + tipo).fadeOut("slow"); // usando jQuery
    }, 3000);
}
