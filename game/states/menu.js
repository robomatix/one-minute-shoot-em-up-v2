'use strict';
function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {


        // Title
        this.titleText = this.game.add.bitmapText(60, 10, 'fontSilkscreen', 'The One Minute Shoot \'Em Up', 18);

        // Pitch
        var pitchTextString1 = "one minute";
        var pitchTextString2 = "to";
        var pitchTextString3 = "save";
        var pitchTextString4 = "the";
        var pitchTextString5 = "world !!!";
        this.pitchText1 = this.game.add.bitmapText(20, 58, 'fontSilkscreen',pitchTextString1, 56);
        this.pitchText2 = this.game.add.bitmapText(230, 110, 'fontSilkscreen',pitchTextString2, 18);
        this.pitchText3 = this.game.add.bitmapText(155, 130, 'fontSilkscreen',pitchTextString3, 56);
        this.pitchText4 = this.game.add.bitmapText(220, 180, 'fontSilkscreen',pitchTextString4, 18);
        this.pitchText5 = this.game.add.bitmapText(105, 200, 'fontSilkscreen',pitchTextString5, 56);



        this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
        this.sprite.anchor.setTo(0.5, 0.5);

        this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
        this.instructionsText.anchor.setTo(0.5, 0.5);

        this.sprite.angle = -20;
        this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
    },
    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
    }
};

module.exports = Menu;
