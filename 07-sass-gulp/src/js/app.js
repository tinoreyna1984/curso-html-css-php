document.addEventListener('DOMContentLoaded', () => iniciarApp());

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();
}

// navegación fija
function navegacionFija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', () => {
        if(sobreFestival.getBoundingClientRect().bottom < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }
        else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    })
}

// crea las imágenes en miniatura
function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 0; i < 12; i++) {
        let id = i + 1;
        const imagen = document.createElement('picture');
        imagen.innerHTML = `<source srcset="build/img/thumb/${id}.avif" type="image/avif" />
                            <source srcset="build/img/thumb/${id}.webp" type="image/webp" />
                            <img
                                src="build/img/thumb/${id}.jpg"
                                alt="imagen galeria"
                                loading="lazy"
        />`;

        imagen.onclick = () => {
            mostrarImagen(id);
        }
        galeria.appendChild(imagen)
    }
}

// muestra la imagen al hacer clic al elemento de la galería
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `<source srcset="build/img/grande/${id}.avif" type="image/avif" />
        <source srcset="build/img/grande/${id}.webp" type="image/webp" />
        <img
        src="build/img/grande/${id}.jpg"
        alt="imagen galeria"
        loading="lazy"
    />`;

    // crea el fondo de overlay de la imagen amplificada
    const overlay = document.createElement("div");
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = () => { // evento para cerrar el modal
        const body = document.querySelector("body");
        body.classList.remove('fijar-body');
        overlay.remove()
    };

    // botón para cerrar el modal overlay
    const cerrarModal = document.createElement('p');
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    overlay.appendChild(cerrarModal);
    cerrarModal.onclick = () => { // evento para cerrar el modal
        const body = document.querySelector("body");
        body.classList.remove('fijar-body');
        overlay.remove()
    };

    // agrega la imagen con el overlay al body
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

// navegación suavizada
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        })
    })
}

