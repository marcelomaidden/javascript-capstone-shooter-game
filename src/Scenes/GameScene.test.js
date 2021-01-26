import GameScene from './GameScene';

const mockGameScene = jest.fn();
let gameScene = null;

jest.mock('./GameScene', () => {
  return jest.fn().mockImplementation(() => {
    return {
      update: mockGameScene, 
      animation: mockGameScene,
      loadZombie: mockGameScene,
      loadHero: mockGameScene,
      loadBullet: mockGameScene,
    }
  })
})

describe('GameScene class tests', () => {
  beforeEach(() => {
    gameScene = new GameScene("scene", "x", "y", "texture", "character");
  })
  it('Create a GameScene object', () => {
    expect(GameScene).toHaveBeenCalled();
  });

  it('Updates GameScene object', () => {
    gameScene.update();
    expect(GameScene).toHaveBeenCalledTimes(2);
  });

  it('Animates GameScene object', () => {
    gameScene.animation();
    expect(GameScene).toHaveBeenCalledTimes(3);
  });

  it('Creates bullet object', () => {
    gameScene.loadBullet();
    expect(GameScene).toHaveBeenCalledTimes(4);
  });

  it('Creates hero object', () => {
    gameScene.loadHero();
    expect(GameScene).toHaveBeenCalledTimes(5);
  });

  it('Create zombie object', () => {
    gameScene.loadZombie();
    expect(GameScene).toHaveBeenCalledTimes(6);
  });
})