var button = document.getElementById("a");

button.addEventListener('click', apuntarseActividad)

function apuntarseActividad() {
    var nombre = prompt("Escribe tu nombre: ");
    var apellidos = prompt("Escribe tus apellidos: ");
    var dni = prompt("Escribe tu documento de identidad: ");
    var correo = prompt("Escribe tu correo electrónico: ");

    alert(nombre + apellidos + dni + correo);
}

