/* global Phaser */
import 'phaser';
import Player from '../Characters/Player';
import Zombie from '../Characters/Zombie';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    if(this.player)
    {
      this.player.destroy();

      this.player = new Player(this, 0, 100, 'hero');
    }
  }

  loadHero() {
    /* right movement images hero */
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
    /* left movement images hero */
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
    /* right movement images hero */
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
    this.load.image('arm', 'assets/characters/zombie/jared0199.png');
  }

  loadBullet() {
    this.load.image('bullet0', 'assets/characters/hero/fire/bullet00.png');
    this.load.image('bullet1', 'assets/characters/hero/fire/bullet01.png');
    this.load.image('bullet2', 'assets/characters/hero/fire/bullet02.png');
    this.load.image('bullet3', 'assets/characters/hero/fire/bullet03.png');
    this.load.image('bullet4', 'assets/characters/hero/fire/bullet04.png');
    this.load.image('bullet5', 'assets/characters/hero/fire/bullet05.png');
    this.load.image('bullet6', 'assets/characters/hero/fire/bullet06.png');
    this.load.image('bullet7', 'assets/characters/hero/fire/bullet07.png');
    this.load.image('bullet8', 'assets/characters/hero/fire/bullet08.png');
    this.load.image('bullet9', 'assets/characters/hero/fire/bullet09.png');
    this.load.image('bullet10', 'assets/characters/hero/fire/bullet10.png');
    this.load.image('bullet11', 'assets/characters/hero/fire/bullet11.png');
    this.load.image('bullet12', 'assets/characters/hero/fire/bullet12.png');
    this.load.image('bullet13', 'assets/characters/hero/fire/bullet13.png');
    this.load.image('bullet14', 'assets/characters/hero/fire/bullet14.png');
    this.load.image('bullet15', 'assets/characters/hero/fire/bullet15.png');
    this.load.image('bullet16', 'assets/characters/hero/fire/bullet16.png');
    this.load.image('bullet17', 'assets/characters/hero/fire/bullet17.png');
    this.load.image('bullet18', 'assets/characters/hero/fire/bullet18.png');
    this.load.image('bullet19', 'assets/characters/hero/fire/bullet19.png');
    this.load.image('bullet20', 'assets/characters/hero/fire/bullet20.png');
    this.load.image('bullet21', 'assets/characters/hero/fire/bullet21.png');
    this.load.image('bullet22', 'assets/characters/hero/fire/bullet22.png');
    this.load.image('bullet23', 'assets/characters/hero/fire/bullet23.png');
    this.load.image('bullet24', 'assets/characters/hero/fire/bullet24.png');
    this.load.image('bullet25', 'assets/characters/hero/fire/bullet25.png');
    this.load.image('bullet26', 'assets/characters/hero/fire/bullet26.png');
    this.load.image('bullet27', 'assets/characters/hero/fire/bullet27.png');
    this.load.image('bullet28', 'assets/characters/hero/fire/bullet28.png');
    this.load.image('bullet29', 'assets/characters/hero/fire/bullet29.png');
    this.load.image('bullet30', 'assets/characters/hero/fire/bullet30.png');
    this.load.image('bullet31', 'assets/characters/hero/fire/bullet31.png');
    this.load.image('bullet32', 'assets/characters/hero/fire/bullet32.png');
    this.load.image('bullet33', 'assets/characters/hero/fire/bullet33.png');
    this.load.image('bullet34', 'assets/characters/hero/fire/bullet34.png');
    this.load.image('bullet35', 'assets/characters/hero/fire/bullet35.png');
    this.load.image('bullet36', 'assets/characters/hero/fire/bullet36.png');
    this.load.image('bullet37', 'assets/characters/hero/fire/bullet37.png');
    this.load.image('bullet38', 'assets/characters/hero/fire/bullet38.png');
    this.load.image('bullet39', 'assets/characters/hero/fire/bullet39.png');
    this.load.image('bullet40', 'assets/characters/hero/fire/bullet40.png');
    this.load.image('bullet41', 'assets/characters/hero/fire/bullet41.png');
    this.load.image('bullet42', 'assets/characters/hero/fire/bullet42.png');
    this.load.image('bullet43', 'assets/characters/hero/fire/bullet43.png');
    this.load.image('bullet44', 'assets/characters/hero/fire/bullet44.png');
    this.load.image('bullet45', 'assets/characters/hero/fire/bullet45.png');
    this.load.image('bullet46', 'assets/characters/hero/fire/bullet46.png');
    this.load.image('bullet47', 'assets/characters/hero/fire/bullet47.png');
  }

  preload() {
    // load images
    this.load.image('background', 'assets/main-logo.jpg');
    this.load.image('ground', 'assets/ui/blue_button02.png');
    this.loadHero();
    this.loadZombie();
    this.loadBullet();
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create() {
    this.add.image(400, 0, 'background');
    this.player = new Player(this, 0, 100, 'hero');
    this.cursors = this.input.keyboard.createCursorKeys();

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 668, 'ground').setScale(5).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(400, 350, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.physics.add.collider(this.player, this.platforms);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.zombieGroup = this.physics.add.group();
    this.bulletGroup = this.physics.add.group();
    this.armGroup = this.physics.add.group();

    const zombiesKilledText = this.make.text({
      x: this.width - 150,
      y: 50,
      text: 'Killed: 0',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });

    zombiesKilledText.setInteractive();

    let zombiesKilled = 0;

    this.physics.add.collider(this.bulletGroup, this.zombieGroup, (bullet, zombie) => {
      zombiesKilled += 1;
      zombiesKilledText.setText(`Killed: ${zombiesKilled}`);
      bullet.destroy();
      zombie.destroy();
      zombie.visible = false;
    });

    this.physics.add.collider(this.armGroup, this.player, () => {
      this.scene.start('Options', { score: zombiesKilled });
    });

    this.physics.add.collider(this.zombieGroup, this.player, () => {
      this.isDead = true;
      this.scene.start('Options', { score: zombiesKilled });
    });

    const randomYPlace = [0, 300, 450, 420];
    const randomXPlace = [0, 750];
    let randomX = 0;
    this.time.addEvent({
      delay: 3000,
      callback() {
        const randomY = Math.floor(Math.random() * (3 - 0));
        randomX = randomX === 0 ? 1 : 0;
        const zombie = new Zombie(this, randomXPlace[randomX],
          randomYPlace[randomY], 'zombie');
        zombie.update();
      },
      callbackScope: this,
      loop: true,
    });

    this.zombieRate = 1000;
    this.nextZombieUpdate = 0;
  }

  update() {
    this.player.update();

    if (this.time.now > this.nextZombieUpdate) {
      this.nextZombieUpdate = this.time.now + this.zombieRate;

      for (let i = 0; i < this.zombieGroup.getChildren().length; i += 1) {
        const zombie = this.zombieGroup.getChildren()[i];
        zombie.update();
      }
    }
  }
}
