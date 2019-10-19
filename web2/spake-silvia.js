var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var cursor;
var logo;
var sprite;

// adding debris group
var debris;

function preload() {
    this.load.image('spake', 'assets/spake.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('blue', 'assets/spake.png');

    // preloading debris 
    this.load.image('antenna', 'assets/Spake_Antenna-01.png');
    this.load.image('dish', 'assets/Spake_Dish-01.png');
    this.load.image('solar1', 'assets/Spake_PanouSolar1-01.png');
    this.load.image('solar2', 'assets/Spake_PanouSolar2-01.png');
    this.load.image('pipe','assets/Spake_Pipe-01.png');
    this.load.image('nut','assets/Spake_Piulita-01.png');
    this.load.image('screw','assets/Spake_Surub-01.png');
}

function create() {
   // this.add.image(400, 300, 'spake');

    //create debris group
    debris= this.add.group();
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'antenna').setScale(0.2);
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'dish').setScale(0.2);;
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'solar1').setScale(0.2);;
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'solar2').setScale(0.2);;
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'pipe').setScale(0.2);;
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'nut').setScale(0.2);;
    debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'screw').setScale(0.2);;
    

   // var particles = this.add.particles('blue');

    logo = this.physics.add.image(400, 300, 'spake');
    logo = this.add.sprite(400, 200, 'spake');
    logo.setScale(0.25);

    logo.setVelocity(0, 0);
    logo.setBounce(0.2);
    logo.setCollideWorldBounds(true);

    //emitter.startFollow(logo);

    cursor = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursor.up.isDown) {
        logo.setVelocityY(-160);
        //logo.angle(-160);
    }
    else if (cursor.down.isDown) {
        logo.setVelocityY(160);
    }
    else if (cursor.left.isDown) {
        logo.setVelocityX(-160);
    }
    else if (cursor.right.isDown) {
        logo.setVelocityX(160);
    }
    else {
        //logo.setVelocity(0, 0);
    }
}