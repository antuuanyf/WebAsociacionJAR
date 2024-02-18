function apuntarseActividad() {
    var nombre, apellidos, dni, correo, correcto;

    //Leemos los datos y comprobamos
    nombre = prompt("Escribe tu nombre: ");
    if (comprobarVacío(nombre)) return;
    apellidos = prompt("Escribe tus apellidos: ");
    if (comprobarVacío(apellidos)) return;
    dni = prompt("Escribe tu documento de identidad: ");
    if (comprobarVacío(dni)) return;
    correo = prompt("Escribe tu correo electrónico: ");
    if (comprobarVacío(correo)) return;

    correcto = confirm("Nombre: " + nombre + "\nApellidos:" + apellidos + "\nDocumento de identidad" + dni + "\nCorreo electrónico: " + correo);

    //Si acepta mostramos mensaje
    if (correcto) alert("Apuntado!! \nLe llegará un email de confirmación!");
}

//Con esta función comprobamos si es vacío
function comprobarVacío(variable) {
    if (variable == null || variable == undefined || variable.trim() == '') {
        alert("Puedes poner alguna puta cosa por favor?")
        return true;
    } else {
        return false;
    }
}