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
    this.load.bitmapFont('fontCarrierCommand', 'assets/fonts/carrier_command/carrier_command.png', 'assets/fonts/carrier_command/carrier_command.xml');

    // Images
    this.game.load.image('pixel', 'assets/pixel.png');
    this.game.load.image('bulletH1', 'assets/bullet-hero-1.png');

    // Spritesheets
    this.load.spritesheet('hero', 'assets/hero-hitted-and-damaged.png', 40, 40, 12);
    this.load.spritesheet('EnemyBomber', 'assets/enemy-bomber-1.png', 60, 40, 3);

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
