'use strict';

var EnemyBomber;

EnemyBomber = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'EnemyBomber', frame);

  this.health = 1;
  this.alive = true;

  //this.dropBombTimer = game.time.now;
  //this.fireRayTimer = game.time.now;
  this.game.physics.arcade.enable(this);
  this.animations.add('blink');
  this.animations.play('blink', 3, true);
  //this.bomber.name = id.toString();

};

EnemyBomber.prototype = Object.create(Phaser.Sprite.prototype);
EnemyBomber.prototype.constructor = EnemyBomber;

EnemyBomber.prototype.update = function() {

//console.log(this.x);

  // Kill bomber if out of game area
  if (this.x < -65 || this.x > 565) {
    this.alive = false;
    this.kill();
    this.resetEnemyBomber(15);
  }

};
EnemyBomber.prototype.resetEnemyBomber = function (y) {

  //console.log('reset');


  var bomberMove = 75;

  // The starting position of the bomber and consquently his moving direction
  // Determinate if the bomber appear on the Left or on the Right
 var lr = this.game.rnd.integerInRange(1, 100);
  // The starting position of the bomber and consequently his moving direction

  if (lr > 50) {
    var x = -60;
    this.body.velocity.x = bomberMove;
  } else {
    var x = 560;
    this.body.velocity.x = -bomberMove;
  }

  this.x = x;
  this.y = y;
  this.health = 1;
  this.alive = true;
  this.exists = true;

}
module.exports = EnemyBomber;
