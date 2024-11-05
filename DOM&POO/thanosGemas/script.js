class Gema{
    constructor(nombre, poder){
        this.nombre = nombre;
        this.poder = poder;
    }
}

class Thanos{
    constructor(){
        this.mis_gemas = [];
        this.poder = this.calcPower();
    }

    recolectar(gemas){
        gemas.forEach(gema =>
            this.mis_gemas.push(gema)
        )
    };

    calcPower(){
        let power = 0;
        this.mis_gemas.forEach(gema =>{
            power += gema.poder;
        })
        return power;
    }
}

function ejercicioGemas(){
    const infinityGems = [new Gema('space', 
        5), new Gema('mind', 5),
        new Gema('soul', 10),
        new Gema('reality', 5),
        new Gema('time', 10),
        new Gema('power', 15),];
    let thanos = new Thanos();
    thanos.recolectar(infinityGems);
    let power = thanos.calcPower();
        
    document.getElementById('poder').textContent = `El poder de Thanos -> ${power}⚡️` 
}
