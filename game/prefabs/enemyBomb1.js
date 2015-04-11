'use strict';

var EnemyBomb1 = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bomb1', frame);

  // Add physic body
  this.game.physics.arcade.enableBody(this);

  // Kill the sprite if out of the world
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;

  // Init the bomb1
  this.anchor.setTo(0.5, 0.5);
  this.body.velocity.y = 240;

};

EnemyBomb1.prototype = Object.create(Phaser.Sprite.prototype);
EnemyBomb1.prototype.constructor = EnemyBomb1;

EnemyBomb1.prototype.update = function() {

  // write your prefab's specific update code here

};
EnemyBomb1.prototype.resetEnemyBomb1 = function (x, y) {

  this.x = x;
  this.y = y;
  this.exists = true;

}



module.exports = EnemyBomb1;
