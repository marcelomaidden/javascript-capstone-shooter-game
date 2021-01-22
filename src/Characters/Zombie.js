/* global Phaser */
import 'phaser';

export default class Zombie extends Phaser.Physics.Arcade.Sprite  {
  
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.physics.world.enableBody(this);
    scene.add.existing(this);
    this.setScale(0.5);  
    this.body.bounce.x = 1;
    this.body.bounce.y = 1;
    this.body.setCollideWorldBounds(true);
    
    this.body.setSize(150, 250)
    this.scene = scene;
  }

  update() {
    this.body.velocity.y = 0;

    if (this.scene.cursors.left.isDown)
    {
        this.body.velocity.x = -360;
        this.anims.play('left', true);
    }
    else if (this.scene.cursors.right.isDown)
    {
        this.body.velocity.x = 360;
        this.anims.play('right', true);
    }
    else {
      this.body.velocity.x = 0;

      this.anims.play('turn');
    }

    if (this.scene.cursors.up.isDown && this.body.touching.down){
      setTimeout(() => {
        this.body.velocity.y = -1000;  
      }, 300);        
    }
  }
}