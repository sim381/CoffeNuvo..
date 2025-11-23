document.getElementById('hamburguesa').addEventListener('click', modificarMenu);

var discriminador = true;
window.addEventListener('resize', ocultarMenu);

function modificarMenu() {
    if (discriminador) {
        document.querySelector('nav').style.left = '0px';
        discriminador = false;
    }
    else {
        document.querySelector('nav').style.left = '-140px';
        discriminador = true;
    }
}

function ocultarMenu() {
    if (window.innerWidth >= 800) {
        document.querySelector('nav').style.left = '-140px';
        discriminador = true;
    }
}
