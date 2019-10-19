var config = {
    type: Phaser.AUTO,
    // type: Phaser.AUTO,
    width: 1400,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
    // ,
    // canvas: 'phaserCanvas'
    // renderType: Phaser.CANVAS,
    // parent: 'canvasOne'

};

var game = new Phaser.Game(config);
// var game = new Phaser.Game(1000, 500, Phaser.AUTO, 'cnv1', { preload: preload, create: create }, { default: 'arcade', arcade: { gravity: { y: 200 } } })



function preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create() {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 200,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(300, 500);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    // this.game.canvas.id = 'blah';

    console.log(game.canvas)

    // var wwd = new WorldWind.WorldWindow('canvasOne');
    // wwd.addLayer(new WorldWind.BMNGLayer());
    // // wwd.addLayer(new WorldWind.BMNGLandsatLayer());
    // wwd.addLayer(new WorldWind.AtmosphereLayer());




}