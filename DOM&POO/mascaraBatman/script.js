const bat = document.getElementById('batman');


document.getElementById('btn').addEventListener('click', function(){
    if (bat.style.display === 'none'){
        bat.style.display = 'block'
    } 
    else {
        bat.style.display = 'none'
    }
})
