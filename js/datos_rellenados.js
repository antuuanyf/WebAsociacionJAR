
// Obtenemos el elemento formulario por su id
var form = document.getElementById("form");
// Añadimos un evento submit al formulario
form.addEventListener("submit", function (evento) {
    // Evitamos que el formulario se envíe y se recargue la página
    evento.preventDefault();
    // Obtenemos los elementos del formulario por su id
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("surname").value;
    var edad = document.getElementById("age").value;
    var documento = document.getElementById("dni").value;
    var correo = document.getElementById("mail").value;
    var telefono = document.getElementById("tlf").value;
    var disponibilidad = document.getElementsByName("availability");
    var checkeds = "";
    for (var i = 0; i < disponibilidad.length; i++) {
        if (disponibilidad[i].checked) {
            checkeds += disponibilidad[i].value + " ";
        }
    }

    var motivacion = document.getElementsByClassName("entrar");
    var seleccionado = "";
    for (var i = 0; i < motivacion.length; i++) {
        if (motivacion[i].selected) {
            seleccionado = motivacion[i].value;
            if (motivacion[i].value == "otro")
                seleccionado += ": " + motivacion[i + 1].value;
        }
    }

    var observaciones = document.getElementById("remarks").value;


    // Creamos un elemento HTML para mostrar los datos
    var resultado = document.createElement("section");
    resultado.classList.add("mostrar");
    resultado.setAttribute("id", "mostrar");
    // Añadimos el contenido al elemento
    resultado.innerHTML = "Nombre: " + nombre + "<br>" +
        "Apellidos: " + apellido + "<br>" +
        "Edad: " + edad + "<br>" + "DNI: " + documento + "<br>" + "Correo electrónico: " + correo + "<br>" +
        "Teléfono: " + telefono + "<br>" + "Disponibilidad: " + checkeds + "<br>" + "Motivación para entrar: " + seleccionado + "<br>" +
        "Observaciones: " + observaciones;
    // Añadimos el elemento dentro del section
    datos.appendChild(resultado);
});
