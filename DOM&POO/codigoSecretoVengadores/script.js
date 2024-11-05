const btn = document.getElementById('btn')
const txt = document.getElementById('txt')

btn.addEventListener('click', function(){
    const pswd = document.getElementById('contraseña').value;
    if(pswd === 'Vengadores'){
        txt.textContent = 'Assemble!';
    }
    else{
        alert('Contraseña incorrecta!');
    }
})