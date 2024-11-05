/* EJERCICIOS JAVASCRIPT (I)
1. Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje de error cuando se produzca alguna de las siguientes situaciones:
a) Al menos una de las 3 variables es negativa
b) Las tres variables son iguales a 0
c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes
 */

function checkVariables(){
    if (a < 0 || b < 0 || c < 0){
        console.log('Error!! Al menos una de las variables en negativa');
    }
    else if (a === 0 && b === 0 && c === 0){
        console.log('Error!! las tres variables son igual a cero');
    }
    else if ((a + b + c) > 10 && a !== b && b !== c && a !== c){
        console.log('Error!! la suma de las variables es mayor que 10 y las tres variables son diferentes');
    }
    else {
        console.log('Las variables son válidas');
    }
}

var a = 3;
var b = 5;
var c = 2;

checkVariables(a, b, c);