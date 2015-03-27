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
