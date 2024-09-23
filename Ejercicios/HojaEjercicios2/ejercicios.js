/* EJERCICIO 1 */

function charComprobation() {
    const text = String(document.getElementById('varA').value);
    const char = String(document.getElementById('varB').value);
    let output = '';  

    if (!text || !char) {
        output = 'Se requieren dos argumentos.';
    } else if (char.length !== 1) {
        output = 'El segundo argumento tiene que ser un único carácter.';
    } else {
        let counter = 0;
        for (let c of text) {
            if (c === char) {
                counter += 1;
            }
        }
        output = 'El carácter "' + char + '" aparece ' + counter + ' veces en el texto.';
    }
    document.getElementById('output1').textContent = output;
}

/* EJERCICIO 2*/

function sum(ar){
    let acc = 0;
    for (let num of ar){
        acc += num;
    }
    return acc;
}

function avg(ar) {
    if (ar.length === 0) return 0;  
    const suma = sum(ar);
    return suma / ar.length;
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