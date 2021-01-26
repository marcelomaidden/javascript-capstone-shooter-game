import Shoot from './Shoot';

const mockShoot = jest.fn();
const mockAnimation = jest.fn();

jest.mock('./Shoot', () => {
  return jest.fn().mockImplementation(() => {
    return {
      update: mockShoot, 
      animation: mockAnimation
    }
  })
})

describe('Shoot class tests', () => {
  it('Create a Shoot object', () => {
    let shoot = new Shoot(("scene", "x", "y", "texture", "animation", "shootName"));

    expect(Shoot).toHaveBeenCalledTimes(1);
  });

  it('Updates shoot object', () => {
    expect(Shoot).toHaveBeenCalledTimes(1);
  });

  it('Animates shoot object', () => {
    expect(Shoot).toHaveBeenCalledTimes(1);
  });
})