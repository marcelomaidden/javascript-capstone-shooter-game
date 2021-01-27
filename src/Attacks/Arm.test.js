import Arm from './Arm';

const mockArm = jest.fn();
const mockAnimation = jest.fn();
let arm = null;

jest.mock('./Arm', () => jest.fn().mockImplementation(() => ({
  update: mockArm,
  animation: mockAnimation,
})));

describe('Arm class tests', () => {
  beforeEach(() => {
    arm = new Arm('scene', 'x', 'y', 'texture', 'character');
  });

  it('Create a Arm object', () => {
    expect(Arm).toHaveBeenCalledTimes(1);
  });

  it('Updates Arm object', () => {
    arm.update();
    expect(Arm).toHaveBeenCalledTimes(2);
  });

  it('Animates Arm object', () => {
    arm.animation();
    expect(Arm).toHaveBeenCalledTimes(3);
  });
});