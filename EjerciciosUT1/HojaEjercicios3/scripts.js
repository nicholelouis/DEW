
// EJERCICIO 1

function arrayRandom(){
    let elements = Number(document.getElementById('v1').value);
    let min = Number(document.getElementById('v2').value);
    let max = Number(document.getElementById('v3').value);
    elements = elements ? parseInt(elements) : 10;
    min = min ? parseInt(min) : 100;
    max = max ? parseInt(max) : 200;
    let arr = [];
    
    if (min >= max) {
        alert("El valor mínimo debe ser menor que el valor máximo");
        return;
    }
    for (let i = 0; i < elements; i++){
        let randomNum = Math.floor(Math.random() * (max - min + 1))+ min;
        arr.push(randomNum);
    };
    document.getElementById('output1').textContent = arr;
}

// EJERCICIO 2
function arrayRandom2(elements = 10, min = 100, max = 200){
    let arr = [];

    for (let i = 0; i < elements; i++){
        let randomNum = Math.floor(Math.random() * (max - min + 1))+ min;
        arr.push(randomNum);
    };
    return arr;
}

function orderArray(){
    arr = arrayRandom2(20, 20, 100);
    output = `Array Original: ${arr} \nArray Ordenado: ${arr.sort((a, b) => a - b)}`;
    document.getElementById('output2').textContent = output;
}


// EJERCICIO 3

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function twistArray(){
    arr = arrayRandom2(20, 20, 100);
    output = `Array Original: ${arr} \nShuffle Array: ${shuffle(arr)}`;
    console.log(arr);
    document.getElementById('output3').textContent = output;
}

// EJERCICIO 4
function ejercicio4() {
    let arr = arrayRandom2(15, -10, 20);
    let output = '';
    let resultarr = []; 

    output += `Este es el array original: ${arr}\n`;
    for (let num of arr) {
        output += `${num}: `; 

        if (num <= -5) {
            if (resultarr.length > 0) {
                let x = resultarr.shift(); 
                output += `Eliminado el primer elemento ${x}. `;
            }
        } else if (num > -5 && num <= 0) {

            if (resultarr.length > 0) {
                let x = resultarr.pop(); 
                output += `Eliminado el último elemento ${x}. `;
            }
        } else if (num > 0 && num <= 10) {
            resultarr.unshift(num);
            output += `Añadido al principio. `;
        } 
        else if (num > 10) {
            resultarr.push(num);
            output += `Añadido al final. `;
        }

        output += `Tamaño actual del array: ${resultarr.length}\n`;
    }

    output += `Este es el array final: ${resultarr.join(", ")}`;
    document.getElementById('output4').textContent = output;
}

// EJERCICIO 5

function ejercicio5(){
    let arr = arrayRandom2(20, 60, 100);
    let arr2 = [];
    for (let num of arr){ arr2.push(Math.sqrt(num))};
    document.getElementById('output5').textContent = arr2;
}

// EJERCICIO 6
function ejercicio6(){
    let arr = arrayRandom2(20, -100, 100);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    output = `El número mínimo: ${min} con índice ${arr.indexOf(min)}\nEl número máximo: ${max} con índice ${arr.indexOf(max)}`
    document.getElementById('output6').textContent = output;
}

//EJERCICIO 7
function ejercicio7(){
    let arr = arrayRandom2(50, 10, 20);
    let repeat_arr = [];
    let output = '';

    arr.forEach(element => {
        if (repeat_arr.includes(element)) {
            output += `Elemento ${element} repetido\n`;
        } else {
            output += `Elemento ${element} visto por primera vez\n`;
            repeat_arr.push(element);
        }        
        repeat_arr.push(element);
        
    });
    document.getElementById('output7').textContent = output;
}

// EJERCICIO 8

function ejercicio8(){
    let arr = arrayRandom2(50, 10, 20);
    const countMap = {};
    let output = '';
    arr.forEach(element => {
        if (countMap[element]) {
            output += `Elemento ${element} repetido. Vez Número: ${countMap[element]}\n`;
            countMap[element]++;
        } 
        else {
            output += `Elemento ${element} visto por primera vez\n`;
            countMap[element] = 1;
        }
    });
    document.getElementById('output8').textContent = output;
}