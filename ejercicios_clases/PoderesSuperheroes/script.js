class Superheroe{
    constructor(nombre, poder, nivel){
        this.nombre = nombre;
        this.poder = poder;
        this.nivel = nivel;
    }
    stats(){
        return `${this.nombre} -> Poder:${this.poder}  Nivel:${this.nivel}`
    }

}

document.querySelector('#btn').addEventListener('click', function(){
    const superheros = [];
    for (let i = 0; i < 10; i ++){
        let s = new Superheroe(`superhero${i}`, RandomNum(), RandomNum());
        superheros.push(s)
    }
    console.log(superheros);
    let winner = superheros[0];
    superheros.forEach(sup => {
        if(sup.poder > winner.poder){
            winner = sup;
        }
    });
    document.getElementById('output').textContent = `El ganador es ${winner.nombre}`;
})

function RandomNum(){
    return Math.floor(Math.random() * (20 - 5 +1 )) + 5;
}
