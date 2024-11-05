class Villano{
    constructor(nombre, plan){
        this.nombre = nombre;
        this.plan = plan;
    }
    cambiarPlan(nuevo){
        this.plan = nuevo;
        return `El plan ha cambiado a -> ${this.plan}`
    }
    stats(){
        return `El plan de ${this.nombre} es ${this.plan}`
    }
}

let joker = new Villano('Joker', 'Destruir Goham')

document.getElementById('joker').textContent = joker.stats();

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    joker.cambiarPlan('Destruir el mundo');
    document.getElementById('joker').textContent = joker.stats();
})
