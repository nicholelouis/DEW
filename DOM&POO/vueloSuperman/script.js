class Superman{
    constructor(){
        this.superm = document.getElementById('superman');
        this.alturaActual = 0;
    }

    volar(){
        this.alturaActual += 100;
        this.superm.style.bottom = this.alturaActual + 'px';
    }
}

const superman = new Superman;