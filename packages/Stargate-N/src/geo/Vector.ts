

class Vector {
  constructor(
    protected x: number,
    protected y: number,
    protected z: number
  ) { }
}

class UnitVector extends Vector {
  constructor(
    x: number,
    y: number,
    z: number
  ) {

    const r = Math.sqrt(x ** 2 + y ** 2 + z ** 2)
    super(x / r, y / r, z / r)
  }

  // numerical error will cause the unit vector to become a bit less unit
  reNormalize() {
    const r = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)

    this.x = this.x / r
    this.y = this.y / r
    this.z = this.z / r

  }
}