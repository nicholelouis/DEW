/* Realizar una función que indicando un texto y un carácter 
(ambos obligatorios, comprobar que el segundo parámetro es realmente 
un único caracter), nos diga cuántas veces aparece el carácter en el texto.*/

function charComprobation(text, char){
    if (text === undefined || char === undefined) {
        return 'Se requieren dos argumentos.';
    }
    if (char.length !== 1){
        return 'El segundo argumento tiene que ser un unico caracter'
    }
    let counter = 0;
    for (let c of text){
        if (c === char){
            counter+= 1;
        }
    }
    return counter;
}
console.log(charComprobation('nichole', 'i'));