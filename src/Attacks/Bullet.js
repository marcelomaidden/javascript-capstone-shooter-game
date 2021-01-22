/* global Phaser */
import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite  {
  
  addAnimation() {
    if (!this.scene.anims.get('bullet_attack')){
      this.scene.anims.create({
        key: 'bullet_attack', 
        frames: [
          {key: 'bullet1'},
          {key: 'bullet2'},
          {key: 'bullet3'},
          {key: 'bullet4'},
          {key: 'bullet5'},
          {key: 'bullet6'},
          {key: 'bullet7'},
          {key: 'bullet8'},
          {key: 'bullet9'},
          {key: 'bullet10'},
          {key: 'bullet11'},
          {key: 'bullet12'},
          {key: 'bullet13'},
          {key: 'bullet14'},
          {key: 'bullet15'},
          {key: 'bullet16'},
          {key: 'bullet17'},
          {key: 'bullet18'},
          {key: 'bullet19'},
          {key: 'bullet20'},
          {key: 'bullet21'},
          {key: 'bullet22'},
          {key: 'bullet23'},
          {key: 'bullet24'},
          {key: 'bullet25'},
          {key: 'bullet26'},
          {key: 'bullet27'},
          {key: 'bullet28'},
          {key: 'bullet29'},
          {key: 'bullet30'},
          {key: 'bullet31'},
          {key: 'bullet32'},
          {key: 'bullet33'},
          {key: 'bullet34'},
          {key: 'bullet35'},
          {key: 'bullet36'},
          {key: 'bullet37'},
          {key: 'bullet38'},
          {key: 'bullet39'},
          {key: 'bullet40'},
          {key: 'bullet41'},
          {key: 'bullet42'},
          {key: 'bullet43'},
          {key: 'bullet44'},
          {key: 'bullet45'},
          {key: 'bullet46'},
          {key: 'bullet47'},
        ],
        frameRate: 50,
        repeat: -1
      })
    }
  }

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.physics.world.enableBody(this);
    scene.add.existing(this);
    this.setScale(0.1);  
    this.body.bounce.x = 1;
    this.body.bounce.y = 1;
    
    this.body.setSize(10, 10)
    this.scene = scene;
    this.addAnimation();
    this.play('bullet_attack');
    this.scene.physics.add.collider(this, this.scene.zombieGroup, () => {
      this.destroy()
    })
  }

  update() {
    if(this.scene.player.move == 'right')
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