/* global Phaser */
import 'phaser';
import Bullet from '../Attacks/Bullet';

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
      frameRate: 20,
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
      frameRate: 20,
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
    this.anims.play('right');
    this.move = 'right';
  }

  update() {
    this.body.velocity.y = 0;

    if (this.scene.cursors.left.isDown)
    {
        this.body.velocity.x = -360;
        this.anims.play('left', true);
        this.move = 'left';
    }
    else if (this.scene.cursors.right.isDown)
    {
        this.body.velocity.x = 360;
        this.anims.play('right', true);
        this.move = 'right'
    }
    else {
      this.body.velocity.x = 0;
      if (this.move == 'left')
      {
        this.anims.play('turn', true);
        this.flipX = true
      }        
      else if (this.move == 'right')
      {
        this.flipX = false
      }        
    }

    if (this.scene.keySpace.isDown) {
      this.scene.time.addEvent({
        delay: 500,
        callback: function() {
          console.log("called")
          let bullet = new Bullet(this.scene, this.x, this.y, 'bullet');
          bullet.update()
        },
        callbackScope: this,
        loop: false
      });
    }

    if (this.scene.cursors.up.isDown && this.body.touching.down){
      setTimeout(() => {
        this.body.velocity.y = -1000;  
      }, 260);        
    }
  }
}