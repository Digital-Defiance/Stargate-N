import Photon from "./photon";


type QuantumOperation = (photon: Photon) => Photon

class Machine {
  process(photons: Photon[]): Photon[] {
    return [...photons]
  }
}


class Chevron extends Machine {
  pass: QuantumOperation[];
  orientation: 1 | -1;
  next: Chevron | Machine;

  constructor(next: Chevron | Machine, pass: QuantumOperation[], orientation: 1 | -1) {
    super()
    this.pass = pass;
    this.orientation = orientation;
    this.next = next;
  }

  process(photons: Photon[]): Photon[] {
    return this.next.process(
      photons.map((photon: Photon) => {

        let newPhoton = photon

        for (let transformation of this.pass)
          newPhoton = transformation(newPhoton) // we can apply lots off stuff here
        return photon
      })
    )
  }
}

export default Chevron