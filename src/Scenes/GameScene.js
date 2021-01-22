/* global Phaser */
import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('background', 'assets/main-logo.jpg');
    this.load.image('ground', 'assets/ui/blue_button02.png');
    /*right movement images hero*/
    this.load.image('hero1', 'assets/characters/hero/jared0055.png');
    this.load.image('hero2', 'assets/characters/hero/jared0056.png');
    this.load.image('hero3', 'assets/characters/hero/jared0057.png');
    this.load.image('hero4', 'assets/characters/hero/jared0058.png');    
    this.load.image('hero5', 'assets/characters/hero/jared0059.png');
    this.load.image('hero6', 'assets/characters/hero/jared0060.png');
    this.load.image('hero7', 'assets/characters/hero/jared0061.png');
    this.load.image('hero8', 'assets/characters/hero/jared0062.png');
    this.load.image('hero9', 'assets/characters/hero/jared0063.png');
    this.load.image('hero10', 'assets/characters/hero/jared0064.png');
    /*left movement images hero*/
    this.load.image('hero11', 'assets/characters/hero/jared0087.png');
    this.load.image('hero12', 'assets/characters/hero/jared0088.png');
    this.load.image('hero13', 'assets/characters/hero/jared0089.png');
    this.load.image('hero14', 'assets/characters/hero/jared0090.png');    
    this.load.image('hero15', 'assets/characters/hero/jared0091.png');
    this.load.image('hero16', 'assets/characters/hero/jared0092.png');
    this.load.image('hero17', 'assets/characters/hero/jared0093.png');
    this.load.image('hero18', 'assets/characters/hero/jared0094.png');
    this.load.image('hero19', 'assets/characters/hero/jared0095.png');
    this.load.image('hero20', 'assets/characters/hero/jared0096.png');
  }

  create() {
    const bg = this.add.image(400, 0, 'background');
    /*Add hero to the game physics */

    this.anims.create({
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


    this.anims.create({
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

    this.anims.create({
      key: 'turn',
      frames: [ 
        { 
          key: 'hero1'
        } ],
      frameRate: 20
    });

    this.player = this.physics.add.sprite(100, 450, 'hero').setScale(0.5)
        
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setGravityY(20000);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 668, 'ground').setScale(5).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.physics.add.collider(this.player, this.platforms);
  }

  update ()
  {
      this.player.setVelocity(0);

      if (this.cursors.left.isDown)
      {
          this.player.setVelocityX(-160);
          this.player.anims.play('left', true);
      }
      else if (this.cursors.right.isDown)
      {
          this.player.setVelocityX(160);
          this.player.anims.play('right', true);
      }
      else {
        this.player.setVelocityX(0);

        this.player.anims.play('turn');
      }

      if (this.cursors.up.isDown){
        this.player.setVelocityY(-800);
      }
  }
}
