document.getElementById('btn').addEventListener('click', function(){
    const  characters = document.querySelectorAll('.characters li');

    characters.forEach(character => {
        if (character.textContent === 'Frodo')
            character.classList.add('target');
    })
});