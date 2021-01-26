import LeaderBoard from './LeaderBoard';

jest.mock('./LeaderBoard', () => {
  return jest.fn().mockImplementation(() => {
    return {
      createGame: jest.fn().mockReturnValue("HashFromGameID"),
      getScore: jest.fn().mockReturnValue([{user: "MAR", score: 40}, {user: "LUA", score: 60}]),
      createScore: jest.fn().mockReturnValue([{user: "MAR", score: 40}])
    }
  })
});

describe('LeaderBoard API calls', () => {
  let leaderboard = null;
  beforeEach(() => {
    leaderboard = new LeaderBoard('My cool game');
  });

  it('Verify if gameName is undefined when a game name is not provided', () => {
    leaderboard = new LeaderBoard();
    expect(leaderboard.gameName).toBeUndefined()
  })

  it('Checks game creation', async() => {
    let gameID = await leaderboard.createGame();
    expect(gameID).toMatch("HashFromGameID");
  });

  it('Checks score creation',  () => {
    expect(leaderboard.createScore("MAR", 40)).toEqual([{user: "MAR", score: 40}])
  });

  it('Checks getScore method',  () => {
    expect(leaderboard.getScore()).toEqual([{user: "MAR", score: 40}, {user: "LUA", score: 60}])
  })
})