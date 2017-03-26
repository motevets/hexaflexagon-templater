export default class HexaflexagonGeometry {
  constructor(triangleBase) {
    this.triangleBase = triangleBase;
  }
  get triangleHeight() { return this.triangleBase * Math.sqrt(3)/2 }
  get hexagonLength() { return 2 * this.triangleHeight }
  get hexagonHeight() { return this.hexagonLength }
  get hexagonWidth() { return 2 * this.triangleBase }
  get xCenterOfTriangleMass() { return this.triangleBase/2};
  get yCenterOfTriangleMass() { return this.triangleBase/(2*Math.sqrt(3))};
}
