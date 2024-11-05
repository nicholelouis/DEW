
/* EJERCICIO 1 */
function checkVariables() {
    const a = Number(document.getElementById('varA').value);
    const b = Number(document.getElementById('varB').value);
    const c = Number(document.getElementById('varC').value);
    let output = '';
    if (a < 0 || b < 0 || c < 0) {
        output = 'Error!! Al menos una de las variables es negativa';
    } else if (a === 0 && b === 0 && c === 0) {
        output = 'Error!! Las tres variables son iguales a cero';
    } else if ((a + b + c) > 10 && a !== b && b !== c && a !== c) {
        output = 'Error!! La suma de las variables es mayor que 10 y las tres variables son diferentes';
    } else {
        output = 'Las variables son válidas';
    }
    document.getElementById('output1').textContent = output;
}

/* EJERCICIO 2 */
function checkNumber(numb) {
    let output = '';
    numb = Number(numb);
    if (numb === 0) {
        output = 'Este es muy fácil... ¡prueba otro!';
    } else if (numb < 0 || numb > 6) {
        output = '¡¡Sólo sé contar de 0 a 6!!';
    } else if (numb % 2 === 0) {
        output = 'El número es par';
    } else {
        output = 'El número es impar';
    }
    document.getElementById('output2').textContent = output;
}

/* EJERCICIO 3 */
function runLoop() {
    let output = '';
    for (var i = 0, j = 20; i <= 8 && j >= 0; i++, j -= 3) {
        output += `${i}, ${j}\n`;
    }
    document.getElementById('output3').textContent = output;
}

/* EJERCICIO 4 */

function runWhile() {
    let output = '';
    let result;
    let iterations = 0; 
    const maxIterations = 100; 

    while (iterations < maxIterations) {
        let arg1 = Math.random() - 0.5; 
        if (arg1 < 0) {
            iterations++; 
            continue;
        }
        let res1 = Math.sqrt(arg1); 
        let arg2 = Math.random();
        if (arg1 + arg2 === 0) break; 
        let res2 = res1 / (arg1 + arg2);  
        result = res1 + res2;  
        output += `${result}\n`;
        if (result <= 0) break;
        iterations++; 
    }
    document.getElementById('output4').textContent = output;
}


/* EJERCICIO 5 */
function showDateTime() {
    let today = new Date();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    let year = today.getFullYear();
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0');
    let seconds = today.getSeconds().toString().padStart(2, '0');
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let output = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${timezone}`;
    document.getElementById('output5').textContent = output;
}

/* EJERCICIO 6 */
function createDate() {
    let date1 = new Date('02/04/2015');
    let date2 = new Date('2015-04-02');
    let date3 = new Date('April 02, 2015');
    document.getElementById('output6').textContent = 
        `Fecha 1: ${date1}\nFecha 2: ${date2}\nFecha 3: ${date3}
        \nCon este formato: “02/04/2015”, es probable que obtengamos un resultado erroneo
        debido que JavaScript lo podria interpretar como 02 de abril o 04 de febrero
        dependiendo del entorno donde lo ejecutemos, los otros dos formatos (“2015-04-02”,
        “April 02, 2015”) son más confiables y podemos obtener un resulta acertado `;
}

/* EJERCICIO 7 */

function calculateTime() {
    let date = document.getElementById('birthDate').value;
    let format = document.getElementById('timeUnit').value;
    let today = new Date();
    let birthDate = new Date(date);
    let seconds = (today - birthDate) / 1000;

    let output;
    switch (format) {
        case 's': output = seconds; break;
        case 'm': output = seconds / 60; break;
        case 'h': output = seconds / 3600; break;
        case 'd': output = seconds / 86400; break;
        default: output = 'Formato no soportado'; break;
    }
    document.getElementById('output7').textContent = output;
}

/* EJERCICIO 8 */
function convertHour() {
    let decimalHour = Number(document.getElementById('decimalHour').value);
    let hour = Math.floor(decimalHour);
    let minutes = Math.round((decimalHour - hour) * 60);
    let seconds = Math.round(((decimalHour - hour) * 60 - minutes) * 60);
    let output = `${hour}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('output8').textContent = output;
}

/* EJERCICIO 9 */
function convert2Julian() {
    let date = document.getElementById('julianDate').value;
    let formattedDate = new Date(date);
    let unixDays = formattedDate.getTime() / 86400000;
    let julianDate = unixDays + 2440587.5;
    document.getElementById('output9').textContent = `Fecha Juliana: ${julianDate}`;
}

/* EJERCICIO 10 */

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function rad2deg(rad) {
    return rad * (180 / Math.PI);
}

function sinDeg(x) {
    let radians = deg2rad(x);
    return Math.sin(radians);  
}

function cosDeg(x) {
    let radians = deg2rad(x);
    return Math.cos(radians);  
}

function sinDegAlt(x) {
    let cos = cosDeg(x); 
    return Math.sqrt(1 - cos * cos);
}

function cosDegAlt(x) {
    let sen = sinDeg(x); 
    return Math.sqrt(1 - sen * sen);
}

function angleConvert() {
    let angle = Number(document.getElementById('angle').value);
    let output = `
        Grados: ${angle}
        Radianes: ${deg2rad(angle)}
        Seno: ${sinDeg(angle)}
        Coseno: ${cosDeg(angle)}
        Seno inverso: ${sinDegAlt(angle)}
        Coseno inverso: ${cosDegAlt(angle)}
    `;
    document.getElementById('output10').textContent = output;
}

