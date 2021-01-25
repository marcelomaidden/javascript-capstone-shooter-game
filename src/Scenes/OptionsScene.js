/* global Phaser */
/* eslint-disable class-methods-use-this */
import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  init({score}) {
    this.score = score
  }

  preload() 
  {
      this.load.image('block', 'assets/ui/block.png');
      this.load.image('rub', 'assets/ui/rub.png');
      this.load.image('end', 'assets/ui/end.png');
      this.load.bitmapFont('arcade', 'assets/ui/arcade.png', 'assets/ui/arcade.xml');
  }
  
  async scores(player) {
    let leaderboard = await window.game.leaderboard.createScore(player, this.score);
    let height = 360;
    
    leaderboard.forEach(({user, score}) => {
        this.add.bitmapText(80, height, 'arcade', `1ST   ${score}       ${user}`).setTint(0xff0000);
        height += 50;
    });
  }

  create ()
  {
      let chars = [
          [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
          [ 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' ],
          [ 'U', 'V', 'W', 'X', 'Y', 'Z', '.', '-', '<', '>' ]
      ];
      let cursor = { x: 0, y: 0 };
      let name = '';
  
      let input = this.add.bitmapText(130, 50, 'arcade', 'ABCDEFGHIJ\n\nKLMNOPQRST\n\nUVWXYZ.-').setLetterSpacing(20);
  
      input.setInteractive();
  
      this.add.image(input.x + 430, input.y + 148, 'rub');
      this.add.image(input.x + 482, input.y + 148, 'end');
  
      let block = this.add.image(input.x - 10, input.y - 2, 'block').setOrigin(0);
  
      this.add.bitmapText(80, 270, 'arcade', 'RANK  SCORE   NAME').setTint(0xff00ff);
      
      let playerText = this.add.bitmapText(560, 310, 'arcade', name).setTint(0xff0000);
  
      this.input.keyboard.on('keyup', (event) => {
  
          if (event.keyCode === 37 || event.keyCode == 65)
          {
              //  left or key a
              if (cursor.x > 0)
              {
                  cursor.x--;
                  block.x -= 52;
              }
          }
          else if (event.keyCode === 39  || event.keyCode == 68)
          {
              //  right or key d
              if (cursor.x < 9)
              {
                  cursor.x++;
                  block.x += 52;
              }
          }
          else if (event.keyCode === 38  || event.keyCode == 87)
          {
              //  up or key w
              if (cursor.y > 0)
              {
                  cursor.y--;
                  block.y -= 64;
              }
          }
          else if (event.keyCode === 40  || event.keyCode == 83)
          {
              //  down or key 83
              if (cursor.y < 2)
              {
                  cursor.y++;
                  block.y += 64;
              }
          }
          else if (event.keyCode === 13 || event.keyCode === 32)
          {
              //  Enter or Space
              if (cursor.x === 9 && cursor.y === 2 && name.length > 0)
              {
                  //  Submit to API
                  this.scores(name);
              }
              else if (cursor.x === 8 && cursor.y === 2 && name.length > 0)
              {
                  //  Rub
                  name = name.substr(0, name.length - 1);
  
                  playerText.text = name;
              }
              else if (name.length < 3)
              {
                  //  Add
                  name = name.concat(chars[cursor.y][cursor.x]);
  
                  playerText.text = name;
              }
          }
  
      });  

      this.gameButton = this.add.sprite(200, 250, 'blueButton1').setInteractive();

      this.endButton = this.add.sprite(400, 250, 'blueButton1').setInteractive();
  
      this.gameText = this.add.text(0, 0, 'Play again', { fontSize: '32px', fill: '#fff' });
      this.centerButtonText(this.gameText, this.gameButton);
  
      this.gameButton.on('pointerdown', () => {
        this.scene.start('Game');
      });
  
      this.endGameText = this.add.text(0, 0, 'End game', { fontSize: '32px', fill: '#fff' });
      this.centerButtonText(this.endGameText, this.endButton);
  
      this.endButton.on('pointerdown', () => {
        this.scene.start('Credits');
      });

      this.endButton.on('pointerover', () => {
        this.endButton.setTexture('blueButton2');
      });
  
      this.endButton.on('pointerout', () => {
        this.endButton.setTexture('blueButton1');
      });

      this.gameButton.on('pointerover', () => {
        this.gameButton.setTexture('blueButton2');
      });
  
      this.gameButton.on('pointerout', () => {
        this.gameButton.setTexture('blueButton1');
      });
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
