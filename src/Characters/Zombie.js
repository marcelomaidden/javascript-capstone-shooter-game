/* global Phaser */
import 'phaser';

export default class Zombie extends Phaser.Physics.Arcade.Sprite  {
  addAnimation() {
    if (!this.scene.anims.get('zombie_walk')){
      this.scene.anims.create({
        key: 'zombie_walk', 
        frames: [
          {key: 'zombie1'},
          {key: 'zombie2'},
          {key: 'zombie3'},
          {key: 'zombie4'},
          {key: 'zombie5'},
          {key: 'zombie6'},
          {key: 'zombie7'},
          {key: 'zombie8'},
          {key: 'zombie9'},
          {key: 'zombie10'},
          {key: 'zombie11'},
          {key: 'zombie12'},
          {key: 'zombie13'},
          {key: 'zombie14'},
          {key: 'zombie15'},
          {key: 'zombie16'},
          {key: 'zombie17'},
          {key: 'zombie18'},
          {key: 'zombie19'},
          {key: 'zombie20'},
          {key: 'zombie21'},
          {key: 'zombie22'},
          {key: 'zombie23'},
          {key: 'zombie24'},
        ],
        frameRate: 8,
        repeat: -1
      })
    }
  }

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.physics.world.enableBody(this);
    scene.add.existing(this);
    this.setScale(0.5);  
    this.body.bounce.x = 1;
    this.body.bounce.y = 1;
    this.body.setCollideWorldBounds(true);
    this.body.setSize(250, 250)
    this.scene = scene;
    this.addAnimation();
    this.play('zombie_walk');
    // this.scene.tweens.add({
    //   targets: this,
    //   x: 0,
    //   duration: 8800,
    //   ease: 'Linear'
    // });
  }

  update() {
    this.body.velocity.y = 0;
    this.state = "CHASE";
  }
}