/* global Phaser */
/* eslint-disable class-methods-use-this */
import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  preload() {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create() {

  }

  update() {

  }
}
