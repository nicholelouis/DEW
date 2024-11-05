/*2. Diseñar una función que acepta un argumento x y que muestre los siguientes mensajes:
a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0
b) ‘El número es par’, sixes 2, 4 ó 6
c) ‘El número es impar’, sixes 1, 3 ó 5
d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos*/

function checkNumber(numb) {
    if (numb == 0) {
        console.log('Este es muy fácil... ¡prueba otro!');
    } 
    else if (numb < 0 || numb > 6) {
        console.log('¡¡Sólo sé contar de 0 a 6!!');
    }
    else if (numb % 2 === 0) {
        console.log('El número es par');
    }
    else if (numb % 2 !== 0) {
        console.log('El número es impar');
    }
}

checkNumber(2)
