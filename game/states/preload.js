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
        //bitmapFont
        this.load.bitmapFont('fontKubasta', 'assets/fonts/kubasta/font.png', 'assets/fonts/kubasta/font.fnt');
        this.load.bitmapFont('fontSilkscreen', 'assets/fonts/silkscreen/font.png', 'assets/fonts/silkscreen/font.fnt');
        //spritesheet
        this.load.spritesheet('hero', 'assets/hero-hitted-and-damaged.png', 40, 480);

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
