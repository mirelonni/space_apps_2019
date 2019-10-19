var height = 900;
var width = 1200;

var config = {
    type: Phaser.AUTO,
    // parent: 'phaser-example',
    width: this.width,
    height: this.height,
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
var accelerate = 5;


var game = new Phaser.Game(config);

function preload() {

    // this.load.setBaseURL('http://127.0.0.1:8080/')

    // this.load.image('bullet', 'assets/spake.png');
    this.load.image('ship', 'assets/Spake_Satelit-01.png');

    //preloading debris intro the image cache
    this.load.image('antenna', 'assets/Spake_Antenna-01.png');
    this.load.image('dish', 'assets/Spake_Dish-01.png');
    this.load.image('solar1', 'assets/Spake_PanouSolar1-01.png');
    this.load.image('solar2', 'assets/Spake_PanouSolar2-01.png');
    this.load.image('pipe', 'assets/Spake_Pipe-01.png');
    this.load.image('nut', 'assets/Spake_Piulita-01.png');
    this.load.image('screw', 'assets/Spake_Surub-01.png');
    // this.load.image('deb', 'assets/Spake_Surub-01.png');
}

function create() {

    // this.add.image(400, 300, 'spake');

    //create the ship sprite from image.
    ship = this.physics.add.image(width / 2, height / 2, 'ship');
    ship.setDamping(false);
    // ship.setDrag(0.9);
    ship.setScale(0.25);
    ship.setMaxVelocity(50);

    //create the debris group

    debris = this.physics.add.group({ angularVelocity: 20 });
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'antenna').setScale(0.2);
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'dish').setScale(0.2);
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'solar1').setScale(0.2);
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'solar2').setScale(0.2);
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'pipe').setScale(0.2);
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'nut').setScale(0.2);
    debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'screw').setScale(0.2);


    cursor = this.input.keyboard.createCursorKeys();

    this.physics.add.overlap(ship, debris, collectGarbage, null, this);

    // text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    debris = this.physics.add.group()


    // this.physics.add.collider(ship, platforms);
}

function update() {

    if (cursor.up.isDown) {


        if (y_speed > 0) {
            y_speed = 0;
        }

        y_speed -= accelerate
        ship.setVelocity(x_speed, y_speed);
        //logo.angle(-160);
    }
    else if (cursor.down.isDown) {

        if (y_speed < 0) {
            y_speed = 0;
        }

        y_speed += accelerate
        ship.setVelocity(x_speed, y_speed);
    }
    else if (cursor.left.isDown) {

        if (x_speed > 0) {
            x_speed = 0;
        }

        x_speed -= accelerate
        ship.setVelocity(x_speed, y_speed);
    }
    else if (cursor.right.isDown) {

        if (x_speed < 0) {
            x_speed = 0;
        }

        x_speed += accelerate
        ship.setVelocity(x_speed, y_speed);
    }
    else {
        // logo.setVelocity(0, 0);
    }



    // for (deb in debris) {
    //     if (this.intersects(ship, deb)) {
    //         console.log(deb)
    //     }
    // }

    // text.setText('FUCK JAVASCRIPT!: ' + ship.body.speed);

    this.physics.world.wrap(ship, 0);


    //giving the debris a angularvelocity

    // console.log("1")


}


function collectGarbage(ship, deb) {
    deb.disableBody(true, true);
    // console.log("1")



}
