/* global Phaser */

import LeaderBoard from './API/LeaderBoard';

import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

const leaderboard = new LeaderBoard('ZombiesOfProductivity');
const result = leaderboard.createGame();
result.then(() => {
  window.game = new Game();

  window.game.leaderboard = leaderboard;
}).catch((error) => {
  document.write(`An error ocurred ${error}`);
});
