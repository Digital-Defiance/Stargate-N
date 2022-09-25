import Photon from "./photon";

import { v4 as uuidv4 } from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export type uuid = string




export default abstract class Machine {
  id: uuid;

  constructor() {
    this.id = uuidv4();
  }

  abstract process(photons: Photon[]): Photon[]
}

export abstract class Particle { }
