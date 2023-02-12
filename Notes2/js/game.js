// creating a new scene name myGame
let gameScene = new Phaser.Scene('myGame');

gameScene.init = function(){};

// loading assets
gameScene.preload = function(){
    // loading images
    this.load.image('background' , 'assets/images/background.webp');
    this.load.image('building' , 'assets/images/building.png');
    this.load.image('car' , 'assets/images/car.png');
    this.load.image('house' , 'assets/images/house.png');
    this.load.image('tree' , 'assets/images/tree.webp');

    // loading songs
    // this.load.audio('Song1' , 'assets/audio/Ice & Fire - King Canyon.mp3');
};

// execute once after assets loads
gameScene.create = function(){
    // adding background
    let bg = this.add.sprite(0,0,'background').setOrigin(0,0);
    bg.setScale(0.34, 0.27);

    // adding multiple items
    this.items = this.add.group([
        {
            key : 'building',
            setXY : {
                x:100,
                y : 150
            },
        },
        {
            key : 'car',
            setXY : {
                x : 230,
                y:205
            },
            setScale : {
                x : 0.05,
                y : 0.05
            }
        },
        {
            key : 'house',
            setXY : {
                x: 300,
                y : 300
            },
            setScale : {
                x : 0.3,
                y : 0.3
            }
        },
        {
            key : 'tree',
            setXY : {
                x : 400,
                y:100
            },
            setScale : {
                x : 0.9,
                y : 0.9
            }
        }
    ]);

    Phaser.Actions.Call(this.items.getChildren() , function(item){
        // make items interactive
        item.setInteractive();

        item.on('pointerdown' , function(pointer){
            console.log("you clicked " + item.texture.key)
        });
    } , this);

    /*
    // making backgroung interactive
    // bg.setInteractive();

    // bg.on('pointerdown' , function(pointer){
    //     console.log('clicked');
    // });
    */

    /*
    // adding sound
    // let Song1 = this.sound.add('Song1');
    // Song1.play();
    // Song1.stop();
    // Song1.pause();
    // Song1.resume();
    */
};

// updating scene
gameScene.update = function(){};

// setting configration
let config = {
    type : Phaser.AUTO,
    width : 640,
    height : 360,
    scene : gameScene,
    title : 'Notes2',
    // pixelArt : false
};

// create game pass configration
let game = new Phaser.Game(config);