import Photon from "./photon";

export default class Machine {
  process(photons: Photon[]): Photon[] {
    return [...photons]
  }
}