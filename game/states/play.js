'use strict';
function Play() {
}
Play.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        /* Initialise emitters
         **********************************************/

        // Add a starfield to the background of the game
        var startEmitter = this.game.add.emitter(this.game.world.centerX, 0, 777);
        startEmitter.width = this.game.world.width;
        startEmitter.makeParticles('pixel');
        startEmitter.setYSpeed(18, 88);
        startEmitter.setXSpeed(0, 0);
        startEmitter.minParticleScale = 0.1;
        startEmitter.maxParticleScale = 0.5;
        startEmitter.minRotation = 0;
        startEmitter.maxRotation = 0;
        startEmitter.gravity = 0;
        startEmitter.start(false, 20000, 100, 0);

        /* Add all the sprites/groups to the game
         *********************************************/

        // Add the player at the bottom of the screen
        this.player = this.game.add.sprite(this.game.world.centerX, 470, 'hero');
        this.game.physics.arcade.enable(this.player);
        this.player.anchor.setTo(0.5, 0.5);
        this.player.body.collideWorldBounds = true;

        /* Initialise some variables
         *********************************************/


        // Use cursor keys
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);

        // Hero Variables
        this.heroSpeedX = 88;


    },

    update: function () {

        // Move the player when the arrow keys are pressed
        this.movePlayer();

    },

    movePlayer: function () {

        // If the left key is pressed
        if (this.cursor.left.isDown) {
            // Move the player to the left
            this.player.body.velocity.x = -this.heroSpeedX;
        }

        // If the right key is pressed
        else if (this.cursor.right.isDown) {
            // Move the player to the right
            this.player.body.velocity.x = this.heroSpeedX;
        }

        // If neither key are pressed
        else {
            // Stop the player
            this.player.body.velocity.x = 0;
        }
    }

};

module.exports = Play;