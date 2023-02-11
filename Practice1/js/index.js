// creating game scene
let gameScene = new Phaser.Scene('Games');

// loading assests
gameScene.preload = function(){
    // loading images
    this.load.image('background','images/background.jpg');
    this.load.image('dragon1','images/dragon1.gif');
    this.load.image('dragon2','images/dragon2.gif');
    this.load.image('dragon3','images/dragon3.gif');
    this.load.image('player','images/player.gif');
    this.load.image('treasure1','images/treasure1.png');
    this.load.image('treasure2','images/treasure2.png');
};

// called once after preload
gameScene.create = function(){
    // add background image
    let bg = this.add.sprite(0,0,'background');
    // set background position to center
    bg.setPosition(1400/2,900/2);
    // cover all the area with background(adjusting height and width of background)
    bg.setScale(1.91,2.21);

    // add player
    this.player = this.add.sprite(50,450,'player');

    // add dragons
    this.dragon1 = this.add.sprite(800,800,'dragon1');
    this.dragon2 = this.add.sprite(300,110,'dragon2');
    // set size of dragon2
    this.dragon2.setScale(0.3);
    this.dragon3 = this.add.sprite(1250,400,'dragon3');
    this.dragon3.setScale(0.7);
    // flip drangon 3 image
    this.dragon3.flipX = true;

    // add treasure image and set size
    this.treasure1 = this.add.sprite(1050,500,'treasure1');
    this.treasure1.setScale(0.5);
    this.treasure2 = this.add.sprite(1050,350,'treasure2');
    this.treasure2.setScale(0.3);
};
let p=0;
let p1 = 0;
let t = 0;
gameScene.update = function(){
    if(p1<2){ // player will complete round only two time
    if(this.player.x <= 885 && p==0){ //at position 885 the player will move
        this.player.x += 5;
        this.player.y += -0.4;
        if(this.player.x == 885){ //at position 885 the player will stop because p=1;
            this.player.flipX = true; //player flips
            p++;
        }
    }
    else{ // p=1 so this section will play
    this.player.x -= 5; //player move backward
    if(t == 0){ // treasure one will move
        this.treasure1.x -= 5;
        this.dragon3.y -= 0.7;
    }
    if(t == 1){ //treasure two will move
        this.treasure2.x -= 5;
        this.dragon3.x -= 2;
    }
    if(this.player.x == 50){ // player move backward till 50 and then move forward because now p=0 again and move to if section
        this.player.flipX = false;
        p = 0;
        t = 1;
        p1++;
    }
    }
}

    this.dragon1.y -= 5;
    this.dragon2.x += 5;
};

// setting configration
let config = {
    type : Phaser.AUTO,
    width : 1400,
    height : 900,
    scene : gameScene
};
// creating a new game, passing the configration
let game = new Phaser.Game(config);