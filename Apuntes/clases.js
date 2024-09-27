var [nombre, edad] = ['pablo', 25]
console.log(nombre, edad)

var HeaderTitle = document.getElementById('header-title');
HeaderTitle.innerHTML = '<boton> id="prueba"> Prueba de inserción de código<boton>'


// Estructura del fetch

const url = 'https://pokeapi.co/api/v2/pokemon/1/'
fetch(url)
    .then((response) => response.jason())
    .then(data => console.log('Me llaman para mi turno'));

const url2 = 'https://pokeapi.co/api/v2/pokemon/1/'
fetch(url2)
    .then((response) => response.jason())
    .then(data => console.log('Me llaman para mi turno'));
console.log('Me pongo en la cola')

//await esperamos a que se resuelva la promera 
// fetch dentro de una funcion asyn