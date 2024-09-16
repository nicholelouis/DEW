function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage = new Image();
    var enemiespic1 = new Image();
    var enemiespic2 = new Image();

    backgroundImage.src = '/img/background.JPG';
    naveImage.src = '/img/astronaut.png';
    enemiespic1.src = '/img/marcian.png';
    enemiespic2.src = '/img/marcian.png';

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;

    var enemyTemplate = function(options){
        return{
            id: options.id ||'',
            x: options.x ||'',
            y: options.y ||'',
            w: options.w ||'',
            h: options.h ||'',
            image: options.image || enemiespic1
        } 
    }

    var enemis = [
        new enemyTemplate({id: '1', x: 100, y: -20, w:50, h:30}),
        new enemyTemplate({id: '2', x: 225, y: -20, w:50, h:30}),
        new enemyTemplate({id: '3', x: 350, y: -20, w:80, h:30}),
        new enemyTemplate({id: '4', x: 100, y: -70, w:80, h:30}),
        new enemyTemplate({id: '5', x: 225, y: -70, w:50, h:30}),
        new enemyTemplate({id: '6', x: 350, y: -70, w:50, h:30}),
        new enemyTemplate({id: '7', x: 475, y: -70, w:50, h:30}),
        new enemyTemplate({id: '8', x: 600, y: -70, w:80, h:30}),
        new enemyTemplate({id: '9', x: 475, y: -20, w:50, h:30}),
        new enemyTemplate({id: '10', x: 600, y: -20, w:50, h:30}),

        new enemyTemplate({id: '11', x: 100, y: -220, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '11', x: 225, y: -220, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '11', x: 350, y: -220, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '12', x: 100, y: -220, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '13', x: 225, y: -220, w:80, h:30, image: enemiespic2}),
        new enemyTemplate({id: '14', x: 350, y: -270, w:80, h:30, image: enemiespic2}),
        new enemyTemplate({id: '15', x: 600, y: -270, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '16', x: 475, y: -270, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '17', x: 475, y: -270, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '18', x: 600, y: -270, w:80, h:30, image: enemiespic2}),
        new enemyTemplate({id: '19', x: 475, y: -220, w:50, h:30, image: enemiespic2}),
        new enemyTemplate({id: '220', x: 600, y: -220, w:50, h:30, image: enemiespic2})
    ]

    var renderEnemies = function(enemyList) {
        for(var i=0;i<enemyList.length;i++){
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, 
                enemyList[i].x,
                enemyList[i].y += .5,
                enemyList[i].w,
                enemyList[i].h
            );
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }
}
window.addEventListener('load',function(event){
    initCanvas();
});

function Launcher(){
    (this.y = 500),
        (this.x = cW * 0.5 - 25),
        (this.w = 100),
        (this.h = 100),
        this.direction,
        (this.bg = 'white'),
        (this.misiles=[]);
    this.gameStatus = {
        over:false,
        message: '',
        fullStyles: 'white',
        font: 'italic bold 36px Arial, sans-serif',
    };
    this.render = function() {
        if (this.direction === 'left'){
            this.x -= 5;
        }
        else if (this.direction === 'rigth'){
            this.x += 5;
        }
        else if (this.direction === 'downArrow'){
            this.y += 5;
        }
        else if (this.direction === 'upArrow'){
            this.y -= 5;
        }
    }

}