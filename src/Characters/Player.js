/* global Phaser */
import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite  {
  
  addAnimation() {
    this.scene.anims.create({
      key: 'right', 
      frames: [
        {key: 'hero1'},
        {key: 'hero2'},
        {key: 'hero3'},
        {key: 'hero4'},
        {key: 'hero5'},
        {key: 'hero6'},
        {key: 'hero7'},
        {key: 'hero8'},
        {key: 'hero9'},
        {key: 'hero10'},
      ],
      frameRate: 8,
      repeat: 0
    })


    this.scene.anims.create({
      key: 'left', 
      frames: [
        {key: 'hero11'},
        {key: 'hero12'},
        {key: 'hero13'},
        {key: 'hero14'},
        {key: 'hero15'},
        {key: 'hero16'},
        {key: 'hero17'},
        {key: 'hero18'},
        {key: 'hero19'},
        {key: 'hero20'},
      ],
      frameRate: 8,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'turn',
      frames: [ 
        { 
          key: 'hero1'
        } ],
      frameRate: 20
    });
  }

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
    this.addAnimation();
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