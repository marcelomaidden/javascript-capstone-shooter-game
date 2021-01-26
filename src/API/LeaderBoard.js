export default class LeaderBoard{
  constructor(gameName) {
    this.gameId = '';
    this.gameName = gameName;
  }  

  async getScores(event) {
    return new Promise((resolve, reject) => {
      let arrayScores = [];
      fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores`)
      .then((result) => result.json())
      .catch((error) => {
        reject(error)
      })
      .then(({result}) => {
        result.forEach(({user, score}) => {
          arrayScores.push({user, score});
        })
        let sortedArray = arrayScores.sort((a, b) => {
          return a.score + b.score;
        });
        resolve(sortedArray)
      })
    })
  }
  
  async createScore (player, score) {
    return new Promise((resolve, reject) => {
      let values = JSON.stringify({"user": player, "score": parseInt(score)});

      fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`, 
      {
        method: 'post',
        mode: 'cors',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: values
      }).then((result) => {result.json()})
      .catch((error) => {
        reject(error)
      })
      .then((data) => {
        resolve(this.getScores())
      })
    })
  }
  
  async createGame () {  
    return new Promise((resolve, reject) => {
      let gameName = {"name": this.gameName}
      let JSONName = JSON.stringify(gameName);
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', 
      {
        method: 'post',
        mode: 'cors',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSONName
      }).then((gameJSON) => {
        return gameJSON.json()
      })
      .then((data) => {
        this.gameId = data.result.split(': ')[1].split(" ")[0];
        resolve(this.gameId);
      })
      .catch((error) => {
        reject(error)
      })
    });
  }
}

