/* global Phaser */
import 'phaser';

export default class Shoot extends Phaser.Physics.Arcade.Sprite  {
  
  addAnimation() {
    if (!this.scene.anims.get(this.shoot_name)){
      this.scene.anims.create(this.animation);
    }
  }

  constructor(scene, x, y, texture, animation, shoot_name) {
    super(scene, x, y, texture);
    scene.physics.world.enableBody(this);
    scene.add.existing(this);
    this.setScale(0.1);  
    this.body.bounce.x = 1;
    this.body.bounce.y = 1;
    this.body.setSize(10, 10);
    this.scene = scene;
    this.animation = animation;
    this.shoot_name = shoot_name;
    this.addAnimation();
    this.play(shoot_name);
  } 

  update() {
    if(this.character.move == 'right')
    {
      this.body.velocity.x = 250;
      this.flipX = false
    }      
    else
    {
      this.body.velocity.x = -250;
      this.flipX = true
    }
      
    this.body.velocity.y = 0;
    this.body.allowGravity = false;
    if(this.x > 800 || this.x < 0)
      this.destroy()
  }
}