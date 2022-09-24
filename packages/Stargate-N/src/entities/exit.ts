import Photon from "./photon";
import Machine from "./_abstract";



class Exit extends Machine {
  result?: Photon[]
  constructor() {
    super()
  }

  process(photons: Photon[]): Photon[] {
    this.result = photons
    return photons
  }

}

export default Exit