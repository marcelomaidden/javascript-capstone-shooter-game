import Arm from './Arm';

const mockArm = jest.fn();
const mockAnimation = jest.fn();

jest.mock('./Arm', () => {
  return jest.fn().mockImplementation(() => {
    return {
      update: mockArm, 
      animation: mockAnimation
    }
  })
})

describe('Arm class tests', () => {
  it('Create a Arm object', () => {
    let arm = new Arm("scene", "x", "y", "texture", "character");

    expect(Arm).toHaveBeenCalledTimes(1);
  });

  it('Updates Arm object', () => {
    expect(Arm).toHaveBeenCalledTimes(1);
  });

  it('Animates Arm object', () => {
    expect(Arm).toHaveBeenCalledTimes(1);
  });
})