import Shoot from './Shoot';

const mockShoot = jest.fn();
const mockAnimation = jest.fn();
let shoot = null;

jest.mock('./Shoot', () => jest.fn().mockImplementation(() => ({
  update: mockShoot,
  animation: mockAnimation,
})));

describe('Shoot class tests', () => {
  beforeEach(() => {
    shoot = new Shoot(('scene', 'x', 'y', 'texture', 'animation', 'shootName'));
  });
  it('Create a Shoot object', () => {
    expect(Shoot).toHaveBeenCalledTimes(1);
  });

  it('Updates shoot object', () => {
    shoot.update();
    expect(Shoot).toHaveBeenCalledTimes(2);
  });

  it('Animates shoot object', () => {
    shoot.animation();
    expect(Shoot).toHaveBeenCalledTimes(3);
  });
});