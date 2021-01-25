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
      .then(({result}) => {
        result.forEach(({user, score}) => {
          arrayScores.push({user, score});
        })
        if (arrayScores === [])
          reject(new Error("An error ocurred"))
        else
          resolve(arrayScores)
      })
    })
  }
  
  async createScore (player, score) {
    let values = JSON.stringify({"user": player, "score": parseInt(score)});

    let submitScore = await
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`, 
    {
      method: 'post',
      mode: 'cors',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: values
    })
  
    let submissionJSON = submitScore.json();
    let scores = await submissionJSON.then(() => {
      return this.getScores();
    })   

    return scores
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
        console.log(error)
        reject(error)
      })
    });
  }
}

