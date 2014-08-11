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
