var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            fps: 60,
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

var ship;
var cursor;
var text;

var x_speed = 0;
var y_speed = 0;
var accelerate = 1;


var game = new Phaser.Game(config);

function preload() {
    // this.load.image('bullet', 'assets/spake.png');
    this.load.image('ship', 'assets/spake.png');

    //preloading debris intro the image cache
    // this.load.image('antenna', 'assets/Spake_Antenna-01.png');
    // this.load.image('dish', 'assets/Spake_Dish-01.png');
    // this.load.image('solar1', 'assets/Spake_PanouSolar1-01.png');
    // this.load.image('solar2', 'assets/Spake_PanouSolar2-01.png');
    // this.load.image('pipe', 'assets/Spake_Pipe-01.png');
    // this.load.image('nut', 'assets/Spake_Piulita-01.png');
    // this.load.image('screw', 'assets/Spake_Surub-01.png');
}

function create() {

    this.add.image(400, 300, 'spake');

    //create the ship sprite from image.
    ship = this.physics.add.image(400, 300, 'ship');
    ship.setDamping(false);
    ship.setDrag(0.9);
    ship.setScale(0.25);
    ship.setMaxVelocity(50);

    //create the debris group

    // debris = this.add.group();
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'antenna').setScale(0.2);
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'dish').setScale(0.2);
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'solar1').setScale(0.2);
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'solar2').setScale(0.2);
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'pipe').setScale(0.2);
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'nut').setScale(0.2);
    // debris.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'screw').setScale(0.2);


    cursor = this.input.keyboard.createCursorKeys();

    // text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
}

function update() {

    if (cursor.up.isDown) {

        y_speed -= accelerate
        ship.setVelocity(x_speed, y_speed);
        //logo.angle(-160);
    }
    else if (cursor.down.isDown) {
        y_speed += accelerate
        ship.setVelocity(x_speed, y_speed);
    }
    else if (cursor.left.isDown) {
        x_speed -= accelerate
        ship.setVelocity(x_speed, y_speed);
    }
    else if (cursor.right.isDown) {
        x_speed += accelerate
        ship.setVelocity(x_speed, y_speed);
    }
    else {
        // logo.setVelocity(0, 0);
    }

    // text.setText('FUCK JAVASCRIPT!: ' + ship.body.speed);

    this.physics.world.wrap(ship, 0);


    //giving the debris a angularvelocity


}
