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


    /* Initialise some variables
     *********************************************/

    // Hero Variables
    this.heroSpeedX = 88;

    // Game variables
    this.totalDuration = 60;
    this.CountdownDisplay = this.totalDuration;
    this.CountdownDisplayTxt = "Countdown:";
    this.game.countIteration = 0;

    this.posXMousePointerPrevious = Phaser.Math.roundTo(this.game.input.mousePointer.x);
    this.nextBullet = 0;
    this.timeBullet = 188;


    /* add a timer to generate enemies
     ******************************************************/

    this.gameTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.generateEnemiesAndCountdown, this);
    this.gameTimer.timer.start();

    /* Display countdown
     ******************************************************/
    var CountdownDisplayNumberToString = this.totalDuration.toString();
    this.CountdownDisplayText = this.game.add.bitmapText(360, 2, 'fontCarrierCommand', this.CountdownDisplayTxt , 9);
    this.CountdownDisplayNumber = this.game.add.bitmapText(470, 2, 'fontCarrierCommand', "xx" , 9); // Apparently, is not possible to directly display numbers...
    this.CountdownDisplayNumber.setText(this.CountdownDisplay);


    /* Launch the first enemy Bomber
     *********************************************/

    var EnemyBomber1 = new EnemyBomber(this.game, -60, 15);
    this.game.add.existing(EnemyBomber1);
    EnemyBomber1.name="EnemyBomber1";
    EnemyBomber1.resetEnemyBomber(15);


  },

  update: function () {

    // Move the player when the mouse is moved
    this.movePlayer();

    // Fire a bullet when left click on the mouse
    // And if the previous bullet was emitted enough time ago
    if (this.game.input.activePointer.isDown && this.game.time.now > this.nextBullet) {
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

  fireBullet: function (x, y) {

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
    var y = this.player.y - this.player.height / 2;
    var x = this.player.x;
    // Create one bullet
    this.fireBullet(x, y);

    // Play sound with small volume
    //this.bulletSound.volume = 0.5;
    //this.bulletSound.play();
  },

  generateEnemiesAndCountdown: function () {
    this.game.countIteration++;

    console.log('geac' + this.game.countIteration);

    if(this.game.countIteration == 15) {
      var EnemyBomber2 = new EnemyBomber(this.game, -60, 80);
      this.game.add.existing(EnemyBomber2);
      EnemyBomber2.name="EnemyBomber2";
      EnemyBomber2.resetEnemyBomber(80);
    }

    this.countDown();


  },
  countDown: function () {

    // Minus the countdown
    this.CountdownDisplay--;

    // Display the Countdown
    this.CountdownDisplayToString = this.CountdownDisplay.toString();
    if (this.CountdownDisplay < 10) {
      this.CountdownDisplayToString = "0" + this.CountdownDisplayToString;
    }
    this.CountdownDisplayNumber.setText(this.CountdownDisplayToString);


  }

};

module.exports = Play;
