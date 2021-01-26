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
          const sortedArray = arrayScores.sort((a, b) => b.score + a.score);
          resolve(sortedArray);
        });
    });
  }

  async createScore(player, score) {
    return new Promise((resolve, reject) => {
      const values = JSON.stringify({ user: player, score: parseInt(score, 10) });

      fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`,
        {
          method: 'post',
          mode: 'cors',
          headers: { 'Content-type': 'application/json;charset=UTF-8' },
          body: values,
        }).then((result) => { result.json(); })
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
          method: 'post',
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
