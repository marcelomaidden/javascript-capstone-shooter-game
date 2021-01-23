/* global Phaser */
import 'phaser';
import Shoot from './Shoot';

export default class Arms extends Shoot  {
  constructor(scene, x, y, texture, character) {
    let animation = {
      key: 'zombieAttack',
      frames: [{key: 'arm'}],
      frameRate: 1,
      repeat: 0
    };
  
    super(scene, x, y, texture, animation, 'zombieAttack');
    this.setScale(0.7);
    this.scene.armGroup.add(this);
    this.character = character;

    this.scene.physics.add.collider(this, this.scene.player, () => {
      this.scene.start('CreditsScene');
      this.destroy()
    })
  } 
}