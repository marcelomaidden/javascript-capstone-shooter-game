import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('background', 'assets/main-logo.jpg');
  }

  create () {
    this.add.image(400, 0, 'background');
  }
};
