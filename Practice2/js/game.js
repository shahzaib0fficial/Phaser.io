// creating new scene
let gameScene = new Phaser.Scene('newScene');

// preloading assets
gameScene.preload = function(){
    // loading images
    this.load.image('background' , 'assets/images/background.jpg');
    this.load.image('clock' , 'assets/images/clock.png');
    this.load.image('alarm' , 'assets/images/alarm.png');
    this.load.image('headfone' , 'assets/images/headfone.png');
    this.load.image('moon' , 'assets/images/moon.png');
    this.load.image('shoes' , 'assets/images/shoes.png');
    this.load.image('background2' , 'assets/images/background2.jpeg');

    // loading audios
    this.load.audio('right' , 'assets/audio/right.mp3');
    this.load.audio('wrong' , 'assets/audio/wrong.mp3');
    this.load.audio('welldone' , 'assets/audio/welldone.mp3');
};

gameScene.create = function(){
    //adding background
    let bg = this.add.sprite(0,0,'background').setOrigin(0,0);
    // resizing background
    bg.setScale(0.2,0.29);

    // adding background2
    let bg2 = this.add.sprite(700,906,'background2');
    // resizing background
    bg2.setScale(1.095,2.02);

    // add finding images
    // this.add.sprite(0,0,'clock');
    this.finds = this.add.group([
        {
            key : 'clock',
            setXY : {
                x : 620,
                y : 300
            },
            setScale : {
                x : 0.05,
                y : 0.05
            }
        },
        {
            key : 'alarm',
            setXY : {
                x : 900,
                y : 530
            },
            setScale : {
                x : 0.05,
                y : 0.05
            }
        },
        {
            key : 'headfone',
            setXY : {
                x : 935,
                y : 633
            },
            setScale : {
                x : 0.04,
                y : 0.04
            },
        },
        {
            key : 'moon',
            setXY : {
                x : 1200,
                y : 560
            },
            setScale : {
                x : 0.02,
                y : 0.02
            }
        },
        {
            key : 'shoes',
            setXY : {
                x : 120,
                y : 730
            },
            setScale : {
                x : 0.04,
                y : 0.04
            }
        }
    ]);
    

    // adding audios
    let wrong = this.sound.add('wrong');
    let right = this.sound.add('right');
    let welldone = this.sound.add('welldone');

    // making background interactive
    bg.setInteractive();
    bg.on('pointerdown' , function(pointer){
        // console.log('background');
        wrong.play();
    });

    // making finding images interactive
    let count = 0;
    Phaser.Actions.Call(this.finds.getChildren() , function(find){
        // making items interactive
        find.setInteractive();

        // adding on click to finding images
        find.on('pointerdown' , function(pointer){
            // console.log("clicked " , find.texture.key);
            right.play();
            // find.setDepth(-1);
            find.destroy();
            count++;
            if(count == 5){ //clearing after all images found
                right.stop();
                welldone.play();
                setTimeout(cls , 1000);
                function cls(){
                    game.destroy();
                }
            }
        });
    } , this);
};

// setting configration
let config = {
    type : Phaser.AUTO,
    width : 1400,
    height : 1000,
    scene : gameScene,
    title : 'newGame'
};

// create game pass configration
let game = new Phaser.Game(config);