document.querySelector('#btn').addEventListener("click", () => findRing());

function findRing(){
    console.log('holis');
    document.querySelectorAll(".characters").forEach(character => {
        if (character.textContent == 'Frodo'){
            console.log('holaaaaaaaaaaa');
        };
    });
}