/* global Phaser */
/* eslint-disable class-methods-use-this */
import 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  preload() {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create() {
    const credits = this.make.text({
      x: 50,
      y: 50,
      text: 'Credits',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    const unsplash = this.make.text({
      x: 50,
      y: 100,
      text: 'Unsplash: ',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    const logo = this.make.text({
      x: 100,
      y: 120,
      text: 'Logo: Kristaps Ungurs',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    
    const fire = this.make.text({
      x: 100,
      y: 150,
      text: 'Fire: reivaxcorp',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    const openGameArt = this.make.text({
      x: 50,
      y: 180,
      text: 'OpenGameArt:',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    }); 

    const heroAndZombies = this.make.text({
      x: 100,
      y: 210,
      text: 'Hero and zombies sprites: Jorge Avila',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    }); 
  }
}
