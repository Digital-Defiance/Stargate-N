import Chevron from "./chevron";
import Photon from "./photon";
import Machine from "./_abstract";
declare class Entry extends Machine {
    message: Photon[];
    next: Chevron;
    constructor(object: any, next: Chevron);
    codifyObject(_object: any): Photon[];
    process(photons: Photon[]): Photon[];
}
export default Entry;
