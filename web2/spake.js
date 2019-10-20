var height = 900;
var width = 1160;

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
var score_text;
var debug_text;
var score = 0;
var collectedDebris = [];
var totalDebris = 1325;

var x_speed = 0;
var y_speed = 0;
var accelerate = 5;
var fuel = 5;
var fuel_images = [];


var game = new Phaser.Game(config);

function preload() {

    // this.load.setBaseURL('http://127.0.0.1:8080/')

    this.load.image('ship', 'assets/Spake_Satelit-01.png');

    //preloading debris intro the image cache
    this.load.image('antenna', 'assets/Spake_Antenna-01.png');
    this.load.image('dish', 'assets/Spake_Dish-01.png');
    this.load.image('solar1', 'assets/Spake_PanouSolar1-01.png');
    this.load.image('solar2', 'assets/Spake_PanouSolar2-01.png');
    this.load.image('pipe', 'assets/Spake_Pipe-01.png');
    this.load.image('nut', 'assets/Spake_Piulita-01.png');
    this.load.image('screw', 'assets/Spake_Surub-01.png');
    this.load.image('fuel', 'assets/Spake_Fuel-01.png');

    this.load.image('europe', 'assets/europe.jpg');
}

function create() {
    //create the ship sprite from image.
    this.add.image(0, 0, 'europe').setOrigin(0,0).setAlpha(0.5);
    ship = this.physics.add.image(width / 2, height / 2, 'ship');
    ship.setDamping(false);
    // ship.setDrag(0.9);
    ship.setScale(0.25);
    ship.setMaxVelocity(500);

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

    score_text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    debug_text = this.add.text(10, 50, '', { font: '16px Courier', fill: '#00ff00' });

    debris = this.physics.add.group()

    for(var i = 0; i < fuel; i++){
        img = this.add.image(900 + 50*i, 50, 'fuel').setScale(0.2);
        fuel_images.push(img);
    }
    timedEvent = this.time.addEvent({ delay: 3000, callback: consumeFuel, callbackScope: this, loop: true });
}

function update(time) {

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

    ship.setCollideWorldBounds(true);
    for(var i = 0; i < collectedDebris.length; i++){
        debri = collectedDebris[i];
        this.physics.moveToObject(debri, ship, 200);
    }

    score_text.setText('Score: ' + score);
}


function collectGarbage(ship, deb) {
    if(!collectedDebris.includes(deb)){
        collectedDebris.push(deb);
        deb.setCollideWorldBounds(true);
        score = score + 1;
    }
}

function consumeFuel(){
    if(fuel > 0){
        fuel = fuel - 1;
        fuel_images[fuel].setVisible(false);
    }

    if(fuel == 0){
        this.scene.pause();
        percentage = score / 13.25;
        alert("You have collected " + percentage.toString().substring(0,4) + " % of all the debris caused by Iridium & Cosmos collision!");
    }
}
