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

function ejercicio2() {
    const input = document.getElementById('numbers').value.trim();
    const values = input.split(',').map(num => num.trim());
    let output = '';
    let ar = [];
    
    if (!input) {
        output = 'Se requiere al menos un argumento.';
    } else {
        for (let num of values) {
            const number = Number(num);
            if (isNaN(number)) {
                output += `¡AVISO! El argumento "${num}" no es un número, lo ignoramos.\n`;
            } else {
                ar.push(number);
            }
        }
    }

    let sum_result = sum(ar);
    let avg_result = avg(ar);
    output += `Suma: ${sum_result}\nMedia: ${avg_result}`;
    
    document.getElementById('output2').textContent = output;
}

// EJERCICIO 3

function ejercicio3() {
    const arg1 = Number(document.getElementById('num1').value);
    const arg2 = Number(document.getElementById('num2').value);
    let output = 'Ver el código!\n';

    output += `La suma es: ${arg1 + arg2} (lista de argumentos)\n`;

    output += `La suma de ${arg1} y ${arg2} es ${arg1 + arg2} (concatenación de strings)\n`;

    output += `La suma de ${arg1} y ${arg2} es ${arg1 + arg2} (marcadores de posición)\n`;

    output += `La suma de ${arg1} y ${arg2} es ${arg1 + arg2} (plantillas)\n`;

    document.getElementById('output3').textContent = output;
}

// EJERCICIO 4

function ejercicio4(){
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    let output = '';  

    if (document.getElementById('n1').value === '' || document.getElementById('n2').value === '') {
        output = 'Se requieren dos argumentos.';
    }
    else if (isNaN(n1)) {
        output = `¡AVISO! El numerador "${document.getElementById('n1').value}" no es un número.\n`;
    }
    else if (isNaN(n2)) {
        output = `¡AVISO! El denominador "${document.getElementById('n2').value}" no es un número.\n`;
    } 
    else if (n2 === 0){
        output = 'No se puede dividir por 0';
    }
    else {
        output = `El resultado de la división es ${n1 / n2}`;
    }
    document.getElementById('output4').textContent = output;
}

// EJERCICIO 5

function checkDNI(){
    const dni = document.getElementById('dni').value; 
    let letters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let output = '';

    if ( dni <= 0 || dni >= 99999999){
        output += `El DNI ${dni} NO es valido`;
    }
    else {
        let letter = letters[Math.floor(dni % 23)];
        output = `${dni}${letter}`
    }
    document.getElementById('output5').textContent = output;
}

// EJERCICIO 6

function elementSplit(){
    const text = String(document.getElementById('elements').value);
    const spliter = String(document.getElementById('spliter').value);
    let arr = text.split(spliter);
    output = '';

    arr.forEach((element, index) => {
        output += `Elemento ${index + 1}: ${element} \n`
    })
    document.getElementById('output6').textContent = output;
    console.log(arr, text, output)
}

// EJERCICIO 7

function ejercicio7(){
    const text = String(document.getElementById('ejer7').value);
    let text2 = ((text.toLocaleLowerCase()).trim()).split(" ");
    let acc = 0
    let ger = (text2.at(-1)).slice(-3);

    if (text2[0] === 'la' || text2[0] === 'el'){
        acc += 1;
    }
    if (ger === 'ndo'){
        acc += 10;
    }
    if (text2.includes('con')){
        acc += 100;
    }
    document.getElementById('output7').textContent = acc;
    console.log(acc, ger);
}

// EJERCICIO 8

function upSideDown(){
    const text = (String(document.getElementById('ejer8').value)).toLocaleLowerCase();
    let output = '';

    if (text.includes('arriba')){
        let newText = text.replace('arriba', 'abajo');
        output = newText;
    } 
    else {
        output = 'El texto no contiene la palabra "arriba"';
    }
    document.getElementById('output8').textContent = output;
}

// EJERCICIO 9

function ejercicio9(){
    const text = (String(document.getElementById('ejer9').value)).trim();
    let output = '';
    
    if (text === text.toLowerCase()){
        output = 'El texto esta en minúscula';
    }
    else if ( text === text.toUpperCase()){
        output = 'El texto esta en mayúscula';
    }
    else {
        output = 'El texto esta en minúscula y mayúscula';
    }
    document.getElementById('output9').textContent = output;
}

// EJERCICIO 10

function palindrome(){
    const text = (String(document.getElementById('ejer10').value)).toLowerCase();
    let original_txt = text.replace(/[^a-zA-Z]+/g, '');
    let reverse_txt = original_txt.split('').reverse().join('');

    output = '';
    console.log(reverse_txt, original_txt);

    if (reverse_txt === original_txt){
        output = 'Es un palíndrome!!';
    } else{
        output = 'No es un palíndrome :('
    }
    document.getElementById('output10').textContent = output;
}