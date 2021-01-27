export default class LeaderBoard {
  constructor(gameName) {
    this.gameId = '';
    this.gameName = gameName;
  }

  async getScores() {
    return new Promise((resolve, reject) => {
      const arrayScores = [];
      fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores`)
        .then((result) => result.json())
        .catch((error) => {
          reject(error);
        })
        .then(({ result }) => {
          result.forEach(({ user, score }) => {
            arrayScores.push({ user, score });
          });
          const sortedArray = arrayScores.sort((a, b) => {
            b = parseInt(b.score, 10);
            a = parseInt(a.score, 10);
            return b - a;
          });
          resolve(sortedArray);
        });
    });
  }

  async createScore(player, playerScore) {
    return new Promise((resolve, reject) => {
      const scoreObj = { user: player, score: String(playerScore) };
      const values = JSON.stringify(scoreObj);
      fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores`,
        {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-type': 'application/json' },
          body: values,
        })
        .then((result) => {
          if (result.ok) return result.json();
          throw new Error('An error ocurred');
        })
        .catch((error) => {
          reject(error);
        })
        .then(() => {
          resolve(this.getScores());
        });
    });
  }

  async createGame() {
    return new Promise((resolve, reject) => {
      const gameName = { name: this.gameName };
      const JSONName = JSON.stringify(gameName);
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
        {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-type': 'application/json;charset=UTF-8' },
          body: JSONName,
        }).then((gameJSON) => gameJSON.json())
        .then(({ result }) => {
          const arraySplit = result.split(': ')[1];
          const [gameId] = arraySplit.split(' ');
          this.gameId = gameId;
          resolve(this.gameId);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
