(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(500, 500, Phaser.AUTO, 'one-minute-shoot-em-up');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":4,"./states/gameover":5,"./states/menu":6,"./states/play":7,"./states/preload":8}],2:[function(require,module,exports){
'use strict';

var BulletH1;

BulletH1 = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bulletH1', frame);

    // Add physic body
    this.game.physics.arcade.enableBody(this);

    // Kill the sprite if out of the world
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    // Init the bullet
    this.anchor.setTo(0.5, 1);
    this.body.velocity.y = -400;

};

BulletH1.prototype = Object.create(Phaser.Sprite.prototype);
BulletH1.prototype.constructor = BulletH1;

BulletH1.prototype.update = function() {

  // write your prefab's specific update code here

};
BulletH1.prototype.resetBulletH1 = function (x, y) {

  this.x = x;
  this.y = y;
  this.exists = true;

}
module.exports = BulletH1;

},{}],3:[function(require,module,exports){
'use strict';




var BulletH1Group;

BulletH1Group = function(game, parent) {
    Phaser.Group.call(this, game, parent);


};

BulletH1Group.prototype = Object.create(Phaser.Group.prototype);
BulletH1Group.prototype.constructor = BulletH1Group;

BulletH1Group.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = BulletH1Group;

},{}],4:[function(require,module,exports){
'use strict';

function Boot() {
}

Boot.prototype = {
    preload: function () {
        this.load.image('preloader', 'assets/preloader.gif');
    },
    create: function () {
        this.game.input.maxPointers = 1;
        this.game.state.start('preload');
    }
};

module.exports = Boot;

},{}],5:[function(require,module,exports){
'use strict';
function GameOver() {
}

GameOver.prototype = {
    preload: function () {

    },
    create: function () {
        var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
        this.titleText = this.game.add.text(this.game.world.centerX, 100, 'Game Over!', style);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
        this.congratsText.anchor.setTo(0.5, 0.5);

        this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
        this.instructionText.anchor.setTo(0.5, 0.5);
    },
    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
    }
};
module.exports = GameOver;

},{}],6:[function(require,module,exports){
'use strict';
function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {


        // Title
        this.titleText = this.game.add.bitmapText(60, 500, 'fontSilkscreen', 'The One Minute Shoot \'Em Up', 18);
        this.game.add.tween(this.titleText).to({y: 10}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        // Pitch
        var pitchTextString1 = "one minute";
        var pitchTextString2 = "to";
        var pitchTextString3 = "save";
        var pitchTextString4 = "the";
        var pitchTextString5 = "world";
        var pitchTextString6 = "!!!";
        this.pitchText1 = this.game.add.bitmapText(30, 500, 'fontSilkscreen', pitchTextString1, 56);
        this.pitchText2 = this.game.add.bitmapText(230, 500, 'fontSilkscreen', pitchTextString2, 18);
        this.pitchText3 = this.game.add.bitmapText(155, 500, 'fontSilkscreen', pitchTextString3, 56);
        this.pitchText4 = this.game.add.bitmapText(220, 500, 'fontSilkscreen', pitchTextString4, 18);
        this.pitchText5 = this.game.add.bitmapText(110, 500, 'fontSilkscreen', pitchTextString5, 64);
        this.pitchText6 = this.game.add.bitmapText(500, 200, 'fontSilkscreen', pitchTextString6, 64);
        this.game.add.tween(this.pitchText1).to({y: 60}, 1000).easing(Phaser.Easing.Bounce.Out).delay(1500).start();
        this.game.add.tween(this.pitchText2).to({y: 110}, 1000).easing(Phaser.Easing.Bounce.Out).delay(2000).start();
        this.game.add.tween(this.pitchText3).to({y: 130}, 1000).easing(Phaser.Easing.Bounce.Out).delay(3500).start();
        this.game.add.tween(this.pitchText4).to({y: 180}, 1000).easing(Phaser.Easing.Bounce.Out).delay(4000).start();
        this.game.add.tween(this.pitchText5).to({y: 200}, 1000).easing(Phaser.Easing.Bounce.Out).delay(5500).start();
        this.game.add.tween(this.pitchText6).to({x: 370}, 1000).easing(Phaser.Easing.Bounce.Out).delay(6000).start();

        // Hero
        this.hero = this.game.add.sprite(this.game.world.centerX, -20, 'hero');
        this.hero.anchor.setTo(0.5, 0.5);
        this.game.add.tween(this.hero)
            .to({ y: 470 }, 2000, Phaser.Easing.Bounce.Out, true, 7000, 0, false)
            .to({x: 470}, 3500, Phaser.Easing.Linear.NONE, true, 0, 0, false)
            .to({x: 25}, 7000, Phaser.Easing.Linear.NONE, true, 0, 10000, true);
        //http://www.html5gamedevs.com/topic/1651-tween-oncompletecallback/

        this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play', { font: '16px Arial', fill: '#ffffff', align: 'center'});
        this.instructionsText.anchor.setTo(0.5, 0.5);

    },
    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
    }
};

module.exports = Menu;

},{}],7:[function(require,module,exports){
'use strict';

// Prefabs
var bulletH1Group = require('../prefabs/bulletH1Group');
var bulletH1 = require('../prefabs/bulletH1');

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

        // Create the bullet group
        this.bulletH1Group = new bulletH1Group(this.game);


        /* Initialise some variables
         *********************************************/

        // Hero Variables
        this.heroSpeedX = 88;

        // Game variables
        this.posXMousePointerPrevious = Phaser.Math.roundTo(this.game.input.mousePointer.x);
        this.nextBullet = 0;
        this.timeBullet = 188;



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

},{"../prefabs/bulletH1":2,"../prefabs/bulletH1Group":3}],8:[function(require,module,exports){
'use strict';
function Preload() {
    this.asset = null;
    this.ready = false;
}

Preload.prototype = {
    preload: function () {

        this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);

        // BitmapFont
        this.load.bitmapFont('fontKubasta', 'assets/fonts/kubasta/font.png', 'assets/fonts/kubasta/font.fnt');
        this.load.bitmapFont('fontSilkscreen', 'assets/fonts/silkscreen/font.png', 'assets/fonts/silkscreen/font.fnt');

        // Images
        this.game.load.image('pixel', 'assets/pixel.png');
        this.game.load.image('bulletH1', 'assets/bullet-hero-1.png');

        // Spritesheets
        this.load.spritesheet('hero', 'assets/hero-hitted-and-damaged.png', 40, 40, 12);

    },
    create: function () {
        this.asset.cropEnabled = false;
    },
    update: function () {

        if (!!this.ready) {
            this.game.state.start('menu');
        }

    },
    onLoadComplete: function () {

        this.ready = true;

    }
};

module.exports = Preload;

},{}]},{},[1])