

class Photon {

  energy: number;
  polarization: UnitVector;
  direction: UnitVector;

  constructor(energy: number, polarization: UnitVector, direction: UnitVector) {
    this.energy = energy
    this.polarization = polarization
    this.direction = direction
  }

}


export default Photon; 