'use strict';


var BulletH1Group;

BulletH1Group = function (game, parent) {
  Phaser.Group.call(this, game, parent);


};

BulletH1Group.prototype = Object.create(Phaser.Group.prototype);
BulletH1Group.prototype.constructor = BulletH1Group;

BulletH1Group.prototype.update = function () {

  // write your prefab's specific update code here

};

module.exports = BulletH1Group;
