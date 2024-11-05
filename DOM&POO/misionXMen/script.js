const misiones = document.querySelectorAll('#misiones li')

misiones.forEach(function(mision) {
    mision.addEventListener('click', function() {
        this.classList.toggle('completada');
    });
});