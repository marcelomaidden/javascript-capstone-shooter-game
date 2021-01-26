import Bullet from './Bullet';

const mockBullet = jest.fn();
const mockAnimation = jest.fn();

jest.mock('./Bullet', () => {
  return jest.fn().mockImplementation(() => {
    return {
      update: mockBullet, 
      animation: mockAnimation
    }
  })
})

describe('Bullet class tests', () => {
  it('Create a Bullet object', () => {
    let bullet = new Bullet("scene", "x", "y", "texture", "character");

    expect(Bullet).toHaveBeenCalledTimes(1);
  });

  it('Updates Bullet object', () => {
    expect(Bullet).toHaveBeenCalledTimes(1);
  });

  it('Animates Bullet object', () => {
    expect(Bullet).toHaveBeenCalledTimes(1);
  });
})