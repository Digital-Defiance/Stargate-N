import Photon from "./photon";
import Machine from "./_abstract";


type QuantumOperation = (photon: Photon) => Photon


class Chevron extends Machine {
  pass: QuantumOperation[];
  orientation: 1 | -1;
  next?: Chevron;
  imprint?: Photon[];

  constructor(next: Chevron, pass: QuantumOperation[], orientation: 1 | -1) {
    super()
    this.pass = pass;
    this.orientation = orientation;
    this.next = next;
  }

  process(photons: Photon[]): Photon[] {
    if (this.next === undefined) throw Error(
      "`Chevron().next` is undefined in `Chevron().process`."
    )

    const processed: Photon[] = this.next.process(
      photons.map((photon: Photon) => {
        let newPhoton = photon
        for (let transformation of this.pass)
          newPhoton = transformation(newPhoton) // we can apply lots off stuff here
        return photon
      })
    )

    this.imprint = processed
    return processed
  }

  render() {
    if (!this.imprint) throw Error("Chevron hasn't been imprinted yet.")


    // use photon properties to draw something innteresting

  }

}

export default Chevron