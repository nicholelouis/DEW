class Mago{
    constructor(name, hechizo){
        this.name = name;
        this.hechizo = new Hechizo(hechizo);
    }
    stats(){
        return `El ${this.name} con el hechizo de ${this.hechizo.name}`
    }
}

class Hechizo{
    constructor(name){
        this.name = name;
        this.power = randomNum();
    }
}

function getWinner(m1, m2){
    let winner = ``;
    if (m1.hechizo.power > m2.hechizo.power){
        winner = `El ganador es ${m1.name} ✨`;
    } else if (m1.hechizo.power < m2.hechizo.power) {
        winner = `El ganador es ${m2.name} ✨`;
    } else {
        winner =`Es un Empate 🤝`;
    }
    return winner;
}

function randomNum() {
    return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
};

let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    let m1 = new Mago('Mago1', 'agua');
    let m2 = new Mago('Mago2', 'fuego');

    let winner = getWinner(m1, m2);

    document.getElementById('output').innerHTML = `${m1.stats()} y el nivel ${m1.hechizo.power} <br> 
    ${m2.stats()} y el nivel ${m2.hechizo.power} <br>
    Gana el ${winner}`
})