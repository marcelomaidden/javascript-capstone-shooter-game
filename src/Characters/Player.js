import Entity from "./Entity";

export default class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.setData("speed", 200);
  }
}