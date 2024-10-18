document.getElementById('img1').addEventListener('mouseover', function(){
    document.getElementById('img2').style.display = 'block';
    document.getElementById('img1').style.display = 'none';
});

document.getElementById('img2').addEventListener('mouseout', function(){
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img1').style.display = 'block';
});