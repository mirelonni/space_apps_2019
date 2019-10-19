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

function preload() {
    this.load.image('spake', 'assets/spake.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('blue', 'assets/spake.png');

}

function create() {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('blue');

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
        logo.setVelocity(0, 0);
    }
}