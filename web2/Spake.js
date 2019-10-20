Game.Spake = function (game) { };


var height = 900;
var width = 1200;

var ship;
var cursor;
var text;

var x_speed = 0;
var y_speed = 0;
var accelerate = 5;


function collectGarbage(ship, deb) {
    deb.disableBody(true, true);
    // console.log("1")

}

Game.Spake.prototype = {
    create: function () {
        // this.stage.backgroundColor = '#BB0000'


        console.log(this)

        ship = this.physics.game.add.image(100, 100, 'ship');
        console.log(ship)
        // ship.setDamping(false);
        // ship.setDrag(0.9);
        // ship.setScale(0.25);
        // ship.setMaxVelocity(50);



        // //create the debris group

        // debris = this.physics.add.group({ angularVelocity: 20 });
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'antenna').setScale(0.2);
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'dish').setScale(0.2);
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'solar1').setScale(0.2);
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'solar2').setScale(0.2);
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'pipe').setScale(0.2);
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'nut').setScale(0.2);
        // debris.create(Math.random() * (width - 100), Math.random() * (height - 100), 'screw').setScale(0.2);


        cursor = this.input.keyboard.createCursorKeys();

        // this.physics.add.overlap(ship, debris, collectGarbage, null, this);

        // // text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        // debris = this.physics.add.group()



    },

    update: function () {
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

        // text.setText('FUCK JAVASCRIPT!: ' + ship.body.speed);

        // this.physics.world.wrap(ship, 0);
    }









    // function create() {

    //     // this.add.image(400, 300, 'spake');

    //     //create the ship sprite from image.
    //    


    //     cursor = this.input.keyboard.createCursorKeys();

    //     this.physics.add.overlap(ship, debris, collectGarbage, null, this);

    //     // text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    //     debris = this.physics.add.group()


    //     // this.physics.add.collider(ship, platforms);
    // }

    // function update() {

    //     if (cursor.up.isDown) {


    //         if (y_speed > 0) {
    //             y_speed = 0;
    //         }

    //         y_speed -= accelerate
    //         ship.setVelocity(x_speed, y_speed);
    //         //logo.angle(-160);
    //     }
    //     else if (cursor.down.isDown) {

    //         if (y_speed < 0) {
    //             y_speed = 0;
    //         }

    //         y_speed += accelerate
    //         ship.setVelocity(x_speed, y_speed);
    //     }
    //     else if (cursor.left.isDown) {

    //         if (x_speed > 0) {
    //             x_speed = 0;
    //         }

    //         x_speed -= accelerate
    //         ship.setVelocity(x_speed, y_speed);
    //     }
    //     else if (cursor.right.isDown) {

    //         if (x_speed < 0) {
    //             x_speed = 0;
    //         }

    //         x_speed += accelerate
    //         ship.setVelocity(x_speed, y_speed);
    //     }
    //     else {
    //         // logo.setVelocity(0, 0);
    //     }

    //     // text.setText('FUCK JAVASCRIPT!: ' + ship.body.speed);

    //     this.physics.world.wrap(ship, 0);

    // }


    // 

};