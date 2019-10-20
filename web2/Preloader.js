
Game.Preloader = function (game) {
    this.preloadBar = null;
};

Game.Preloader.prototype = {

    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);


        this.time.advencedTiming = true;


        // this.load.setPreloaderSprite(this.preloadBar);

        //load assets here

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

    },

    create: function () {

        this.state.start('Spake')


    }


}