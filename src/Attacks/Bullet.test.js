import Bullet from './Bullet';

const mockBullet = jest.fn();
const mockAnimation = jest.fn();
let bullet = null;

jest.mock('./Bullet', () => jest.fn().mockImplementation(() => ({
  update: mockBullet,
  animation: mockAnimation,
})));

describe('Bullet class tests', () => {
  beforeEach(() => {
    bullet = new Bullet('scene', 'x', 'y', 'texture', 'character');
  });
  it('Create a Bullet object', () => {
    expect(Bullet).toHaveBeenCalledTimes(1);
  });

  it('Updates Bullet object', () => {
    bullet.update();
    expect(Bullet).toHaveBeenCalledTimes(2);
  });

  it('Animates Bullet object', () => {
    bullet.animation();
    expect(Bullet).toHaveBeenCalledTimes(3);
  });
});