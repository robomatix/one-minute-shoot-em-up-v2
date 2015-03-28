'use strict';

// Prefabs
var bulletH1Group = require('../prefabs/bulletH1Group');
var bulletH1 = require('../prefabs/bulletH1');
var EnemyBomber = require('../prefabs/EnemyBomber');

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
        startEmitter.start(false, 18000, 100, 0);


        /* Add all the sprites/groups to the game
         *********************************************/

        // Add the player at the bottom of the screen
        this.player = this.game.add.sprite(this.game.world.centerX, 470, 'hero');
        this.game.physics.arcade.enable(this.player);
        this.player.anchor.setTo(0.5, 0.5);
        this.player.body.collideWorldBounds = true;



        // Create groups
        this.bulletH1Group = new bulletH1Group(this.game);
      this.EnemyBomber1Group = new bulletH1Group(this.game);




        /* Initialise some variables
         *********************************************/

        // Hero Variables
        this.heroSpeedX = 88;

        // Game variables
        this.posXMousePointerPrevious = Phaser.Math.roundTo(this.game.input.mousePointer.x);
        this.nextBullet = 0;
        this.timeBullet = 188;


      var EnemyBomber1 = new EnemyBomber(this.game, -60, 15);
      this.game.add.existing(EnemyBomber1);
      EnemyBomber1.resetEnemyBomber(15);



    },

    update: function () {

        // Move the player when the mouse is moved
        this.movePlayer();

        // Fire a bullet when left click on the mouse
        // And if the previous bullet was emitted enough time ago
        if (this.game.input.activePointer.isDown && this.game.time.now > this.nextBullet)
        {
            // Reset the timer
            this.nextBullet = this.game.time.now + this.timeBullet;

            this.playerFire();
        }



    },

    movePlayer: function () {

        // The method moveToPointer doesn't really do the job...

        // Get some infos
        this.posXMousePointer = Phaser.Math.roundTo(this.game.input.mousePointer.x);
        this.posXPlayer = Phaser.Math.roundTo(this.player.x);

        // The mouse has moved
        if (this.posXMousePointerPrevious != this.posXMousePointer) {

            // To go the left
            if (this.posXMousePointer < this.posXPlayer) {
                // Move the player to the left
                this.player.body.velocity.x = -this.heroSpeedX;
            }
            // To go to the right
            else if (this.posXMousePointer > this.posXPlayer) {
                // Move the player to the right
                this.player.body.velocity.x = this.heroSpeedX;
            }

        }

        // Register the position of the mouse to use it as a reference for the next update
        this.posXMousePointerPrevious = this.posXMousePointer;
        /*

         // If neither key are pressed
         else {
         // Stop the player
         this.player.body.velocity.x = 0;
         }
         */


    },

    fireBullet: function (x,y) {

        // Retrieve a bullet from the bullets group
        var bullet = this.bulletH1Group.getFirstExists(false);
        if (!bullet) {
          var bullet = new bulletH1(this.game, 250, 250);
          this.bulletH1Group.add(bullet);
        }
        // Init the bullet
        bullet.resetBulletH1(x, y);

    },

    playerFire: function () {
      var y= this.player.y - this.player.height/2;
      var x = this.player.x;
        // Create one bullet
        this.fireBullet(x,y);

        // Play sound with small volume
        //this.bulletSound.volume = 0.5;
        //this.bulletSound.play();
    }

};

module.exports = Play;
