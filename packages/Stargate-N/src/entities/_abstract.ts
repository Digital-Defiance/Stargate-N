import Photon from "./photon";

export default abstract class Machine {
  abstract process(photons: Photon[]): Photon[]
}

export abstract class Particle { }
