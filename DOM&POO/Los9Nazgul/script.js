const nazuls = document.querySelectorAll('.nazgul');

nazuls.forEach(item => {
    item.addEventListener('mouseover', function(){
        this.textContent = 'Nazgul';
    });

    item.addEventListener('mouseout', function(){
        this.textContent= this.getAttribute('data-original-text');
    });

    item.setAttribute('data-original-text', item.textContent);
});