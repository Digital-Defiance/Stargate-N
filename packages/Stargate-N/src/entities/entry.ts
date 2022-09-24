import Chevron from "./chevron";
import Photon from "./photon";
import Machine from "./_abstract";



class Entry extends Machine {
  message: Photon[]
  next: Chevron

  constructor(object: any, next: Chevron) {
    super()
    this.next = next;
    this.message = this.codifyObject(object)
  }

  codifyObject(_object: any): Photon[] {
    return [
      new Photon(10,
        new UnitVector(0, 1, 0), // polarization, y axis direction 
        new UnitVector(0, 0, 1) // direction of motion, optics z-axis
      )
    ]
  }

  process(photons: Photon[]): Photon[] {
    return this.next.process(photons)
  }

}

export default Entry