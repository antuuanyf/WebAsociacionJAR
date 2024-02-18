//Obtenemos el elemento y añadimos un evento
document.getElementById('toggle').addEventListener('change', function (event) {
    const checked = event.target.checked;
    const body = document.body;
    const labelToggle = document.getElementById('label_toggle');
    const iconElement = document.createElement('i');

    //Comprobamos si está selleccionado
    if (checked) {
        //Desactivamos el modo claro y activamos el oscuro
        iconElement.className = "fa-solid fa-sun";
        labelToggle.innerHTML = '';
        labelToggle.appendChild(iconElement);

        body.classList.remove('light_mode');
        body.classList.add('dark_mode');
    } else {
        //Desactivamos el modo oscuro y activamos el claro
        iconElement.className = "fa-solid fa-moon";
        labelToggle.innerHTML = '';
        labelToggle.appendChild(iconElement);

        body.classList.remove('dark_mode');
        body.classList.add('light_mode');
    }
});