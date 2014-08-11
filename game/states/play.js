'use strict';
function Play() {
}
Play.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        /* Add all the sprites/groups to the game
         *********************************************/

        // Add the player at the bottom of the screen
        this.player = this.game.add.sprite(this.game.world.centerX, 470, 'hero');
        this.game.physics.arcade.enable(this.player);
        this.player.anchor.setTo(0.5, 0.5);
        this.player.body.collideWorldBounds = true;


        /* Initialise emitters
         **********************************************/

        // Add a starfield to the background of the game
        var startEmitter = this.game.add.emitter(this.game.world.centerX, 0, 200);
        startEmitter.width = this.game.world.width;
        startEmitter.makeParticles('pixel');
        startEmitter.setYSpeed(18, 88);
        startEmitter.setXSpeed(0, 0);
        startEmitter.minParticleScale = 0.1;
        startEmitter.maxParticleScale = 0.7;
        startEmitter.minRotation = 0;
        startEmitter.maxRotation = 0;
        startEmitter.gravity = 0;
        startEmitter.start(false, 20000, 100, 0);


    },
    update: function () {

    },
    clickListener: function () {
        this.game.state.start('gameover');
    }
};

module.exports = Play;