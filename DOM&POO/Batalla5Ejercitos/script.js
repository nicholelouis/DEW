class Ejercito{
    constructor(nombre, numSoldades){
        this.nombre = nombre;
        this.numSoldades = numSoldades;
        this.fuerza = this.strengthMake();
    }

    strengthMake(){
        return this.numSoldades * 5;
    }

    stats(){
        return `${this.nombre} \n Número de soldados: ${this.numSoldades} \n Fuerza: ${this.fuerza}`
    }
}

function randomNum() {
    return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
};

function getWinner(f1, f2){
    let winner = ``;
    if (f1.fuerza > f2.fuerza){
        winner = `El ganador es ${f1.nombre} ⚔️`;
    } else if (f1.fuerza < f2.fuerza) {
        winner = `El ganador es ${f2.nombre} ⚔️`;
    } else {
        winner =`Es un Empate 🤝`;
    }
    return winner;
}

document.getElementById('btn').addEventListener('click', function(){
    const e1 = new Ejercito('ejercito1', randomNum());
    const e2 = new Ejercito('ejercito2', randomNum());
    console.log(e1.fuerza, e1.nombre, e2.fuerza, e2.nombre);
    let winner = getWinner(e1, e2);
    
    document.getElementById('output').textContent = `${e1.stats()} \n\n ${e2.stats()} \n\n ${winner}`;
})