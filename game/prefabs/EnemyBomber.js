'use strict';

var EnemyBomber;

EnemyBomber = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'EnemyBomber', frame);

  // var
  var lr;
  var y;
  var bomberMove = 75;

  // Determinate if the bomber appear on the Left or on the Right
  //lr = this.game.rnd.integerInRange(1, 100);
  // The starting position of the bomber and consquently his moving direction
  /*
  if (id === 0) {
    y = 25;
  } else {
    y = 75;
  }
  */
  /*
  if (lr > 50) {
    var x = -60;
    this.moveX = bomberMove;
  } else {
    var x = 560;
    this.moveX = -bomberMove;
  }
  */
  /*
  this.health = 1;
  this.alive = true;
  */
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

  // write your prefab's specific update code here

};
EnemyBomber.prototype.resetEnemyBomber = function (x, y) {

  this.x = x;
  this.y = y;
  this.exists = true;

}
module.exports = EnemyBomber;
