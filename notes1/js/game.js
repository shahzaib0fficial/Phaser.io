// creating game scenes
let gameScene = new Phaser.Scene('Game');

// loading assests
gameScene.preload = function(){
    // loading images
    this.load.image('BACKGROUND' , 'images/background.png');
    this.load.image('PLAYER' , 'images/player.png');
    this.load.image('DRAGON' , 'images/dragon.png');

};

// called once after the preload ends
gameScene.create = function(){
    // create background sprite
    let bg = this.add.sprite(0,0,'BACKGROUND');

    // place sprite in center
    bg.setPosition(640/2,360/2);

    // create player sprite
    this.player = this.add.sprite(50,180,'PLAYER');
    // this.player.depth = 1; // when it's uder the background

    // adding dragon/enemy sprite
    this.dragon1 = this.add.sprite(480,180 , 'DRAGON');
    this.dragon2 = this.add.sprite(480,70 , 'DRAGON');

    // resizing image player
    // this.player.scale = 0.2;
    this.player.setScale(0.1);

    // resizing image dragon
    this.dragon1.setScale(0.1);
    this.dragon2.setScale(0.05);

    // fliping the image (X,Y)
    this.dragon2.flipX = true;

    // rotating image
    // this.dragon2.rotation = Math.PI / 4;
    // this.dragon2.setRotation(Math.PI/4);
    // this.dragon2.angle = 45;
    this.dragon2.setAngle(45);

    // set origin to top-left corner
    // bg.setOrigin(0,0);

    // let gameW = this.sys.game.config.width;
    // let gameH = this.sys.game.config.height;
    // console.log(gameW , gameH);
};

gameScene.update = function(){
    // this.dragon2.y += 0.5; 
    this.dragon2.angle += 5; 

    // check if player reached scale of 0.3
    if(this.player.scaleX < 0.3){
        // increasing player size
        this.player.scaleX += 0.001;
        this.player.scaleY += 0.001;
    }
};

// set configration of the game
let config = {
    type : Phaser.AUTO,
    width : 640,
    height : 360,
    scene : gameScene
};

// Creating a new game, pass the configration
let game = new Phaser.Game(config);