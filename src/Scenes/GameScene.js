/* global Phaser */
import 'phaser';
import Player from '../Characters/Player';
import Zombie from '../Characters/Zombie';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  loadHero() {
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

  loadZombie() {
    /*right movement images hero*/
    this.load.image('zombie1', 'assets/characters/zombie/jared0174.png');
    this.load.image('zombie2', 'assets/characters/zombie/jared0175.png');
    this.load.image('zombie3', 'assets/characters/zombie/jared0176.png');
    this.load.image('zombie4', 'assets/characters/zombie/jared0177.png');    
    this.load.image('zombie5', 'assets/characters/zombie/jared0178.png');
    this.load.image('zombie6', 'assets/characters/zombie/jared0179.png');
    this.load.image('zombie7', 'assets/characters/zombie/jared0180.png');
    this.load.image('zombie8', 'assets/characters/zombie/jared0181.png');
    this.load.image('zombie9', 'assets/characters/zombie/jared0182.png');
    this.load.image('zombie10', 'assets/characters/zombie/jared0183.png');
    this.load.image('zombie11', 'assets/characters/zombie/jared0184.png');
    this.load.image('zombie12', 'assets/characters/zombie/jared0185.png');
    this.load.image('zombie13', 'assets/characters/zombie/jared0186.png');
    this.load.image('zombie14', 'assets/characters/zombie/jared0187.png');    
    this.load.image('zombie15', 'assets/characters/zombie/jared0188.png');
    this.load.image('zombie16', 'assets/characters/zombie/jared0189.png');
    this.load.image('zombie17', 'assets/characters/zombie/jared0190.png');
    this.load.image('zombie18', 'assets/characters/zombie/jared0191.png');
    this.load.image('zombie19', 'assets/characters/zombie/jared0192.png');
    this.load.image('zombie20', 'assets/characters/zombie/jared0193.png');
    this.load.image('zombie21', 'assets/characters/zombie/jared0194.png');
    this.load.image('zombie22', 'assets/characters/zombie/jared0195.png');
    this.load.image('zombie23', 'assets/characters/zombie/jared0196.png');
    this.load.image('zombie24', 'assets/characters/zombie/jared0197.png');
    this.load.image('zombie25', 'assets/characters/zombie/jared0198.png');

  }

  preload() {
    // load images
    this.load.image('background', 'assets/main-logo.jpg');
    this.load.image('ground', 'assets/ui/blue_button02.png');
    this.loadHero();
    this.loadZombie();
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create() {    
    const bg = this.add.image(400, 0, 'background');
    this.player = new Player(this, 0, 100, 'hero');
    this.cursors = this.input.keyboard.createCursorKeys();

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 668, 'ground').setScale(5).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.physics.add.collider(this.player, this.platforms);    

    this.zombieGroup = this.physics.add.group();

    let randomPlace = [0, 300, 450, 420]; 

    this.time.addEvent({
      delay: 6000,
      callback: function() {
        let random = Math.floor(Math.random() * (3 - 0));
        let zombie = new Zombie(this, 750, 
          randomPlace[random], 'zombie');
        this.physics.add.collider(zombie, this.platforms);
        this.zombieGroup.add(zombie);  
      },
      callbackScope: this,
      loop: true
    });
  }

  update ()
  {
    this.player.update();
    for(let zombie of this.zombieGroup.getChildren()) {
      zombie.update();
    }
  }
}
