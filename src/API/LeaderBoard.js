export default class LeaderBoard{
  constructor(gameName) {
    this.gameId = '';
    this.gameName = gameName;
    this.createGame();
  }  

  async getScores(event) {
    let result = new Promise((resolve, reject) => {
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

    return result
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
    });
  
    let submissionJSON = submitScore.json();
    let scores = await submissionJSON.then(() => {
      return this.getScores();
    })    

    return scores
  }
  
  async createGame () {  
    let gameName = {"name": this.gameName}
    let JSONName = JSON.stringify(gameName);
  
    let game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', 
    {
      method: 'post',
      mode: 'cors',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSONName
    });

    let gameJSON = await game.json();
    
    this.gameId = gameJSON.result.split(': ')[1].split(" ")[0];
  }  
}

