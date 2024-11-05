function mostrarPoder() {
    const poderes = {
        "Superman": "Superfuerza, visión láser, vuelo",
        "Batman": "Habilidades de detective, artes marciales, tecnología avanzada",
        "Wonder Woman": "Superfuerza, vuelo, habilidades con armas, inmortalidad",
        "Flash": "Velocidad sobrehumana, viajes en el tiempo, reflejos rápidos",
        "Aquaman": "Control sobre la vida marina, superfuerza, capacidad de respirar bajo el agua"
    };

    const seleccion = document.getElementById("superheroes").value;

    const parrafoPoder = document.getElementById("poder");
    parrafoPoder.textContent = `${seleccion}: ${poderes[seleccion]}`;

}