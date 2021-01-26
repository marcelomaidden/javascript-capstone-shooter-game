/* global Phaser */
import 'phaser';
import Arm from '../Attacks/Arm';

export default class Zombie extends Phaser.Physics.Arcade.Sprite {
  addAnimation() {
    if (!this.scene.anims.get('zombie_walk')) {
      this.scene.anims.create({
        key: 'zombie_walk',
        frames: [
          { key: 'zombie1' },
          { key: 'zombie2' },
          { key: 'zombie3' },
          { key: 'zombie4' },
          { key: 'zombie5' },
          { key: 'zombie6' },
          { key: 'zombie7' },
          { key: 'zombie8' },
          { key: 'zombie9' },
          { key: 'zombie10' },
          { key: 'zombie11' },
          { key: 'zombie12' },
          { key: 'zombie13' },
          { key: 'zombie14' },
          { key: 'zombie15' },
          { key: 'zombie16' },
          { key: 'zombie17' },
          { key: 'zombie18' },
          { key: 'zombie19' },
          { key: 'zombie20' },
          { key: 'zombie21' },
          { key: 'zombie22' },
          { key: 'zombie23' },
          { key: 'zombie24' },
        ],
        frameRate: 8,
        repeat: -1,
      });
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
    this.body.setSize(150, 250);
    this.scene = scene;
    this.addAnimation();
    this.play('zombie_walk');
    this.scene.physics.add.collider(this, this.scene.platforms);
    this.scene.zombieGroup.add(this);

    this.fireRate = 9000;
    this.nextFire = 0;
  }

  update() {
    this.body.velocity.y = 0;
    this.state = 'CHASE';
    const dx = this.scene.player.x - this.x;
    const dy = this.scene.player.y - this.y;
    if (dx <= 0) {
      this.move = 'left';
      this.flipX = false;
    } else {
      this.move = 'right';
      this.flipX = true;
    }

    const angle = Math.atan2(dy, dx);

    const speed = 50;
    this.body.setVelocity(
      Math.cos(angle) * speed,
      Math.sin(angle) * speed,
    );


    if (this !== undefined) {
      if (this.scene.time.now > this.nextFire) {
        this.nextFire = this.scene.time.now + this.fireRate;
        const arm = new Arm(this.scene, this.x, this.y, 'arm', this);
        arm.update();
      }
    }
  }
}