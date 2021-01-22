import 'phaser';
/* global Phaser */

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 150 },
        debug: false
    }
  },
};

