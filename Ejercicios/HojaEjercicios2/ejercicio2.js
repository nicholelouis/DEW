/*Escribir una función que acepte al menos un argumento 
(el primer argumento debe ser obligatorio, mostrar un mensaje de error si 
no se indica, luego se pueden indicar tantos argumentos como desee el usuario) 
y que devuelva la suma y la media de todos los elementos. 
Comprobar que todos los argumentos sean números e ignorar los que no lo sean, 
mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 3 "Hola" 
no es un número, lo ignoramos"). */

function sum(ar){
    let acc = 0;
    for (let num of ar){
        acc += num;
    }
    return acc;
}

function myFunction() {
    if (arguments.length < 1) {
        return 'Error: Se requiere al menos un argumento.';
    }
    let ar = [];
    for (let num of arguments){
        if (typeof num !== 'number'){
            console.log('¡AVISO! El argumento ${num} no es un número, lo ignoramos');
        }
        else{
            ar.push(num)
        }
    }
    return sum(ar);
}