'use strict';
function Play() {
}
Play.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        /* Add all the sprites/groups to the game
        *********************************************/

        // Add the player at the bottom of the screen
        this.player = this.game.add.sprite(this.game.world.centerX, 470, 'hero');
        this.game.physics.arcade.enable(this.player);
        this.player.anchor.setTo(0.5, 0.5);
        this.player.body.collideWorldBounds = true;


    },
    update: function () {

    },
    clickListener: function () {
        this.game.state.start('gameover');
    }
};

module.exports = Play;