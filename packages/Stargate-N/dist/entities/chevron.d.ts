import Photon from "./photon";
import Machine from "./_abstract";
declare type QuantumOperation = (photon: Photon) => Photon;
declare class Chevron extends Machine {
    pass: QuantumOperation[];
    orientation: 1 | -1;
    next?: Chevron;
    imprint?: Photon[];
    constructor(next: Chevron, pass: QuantumOperation[], orientation: 1 | -1);
    process(photons: Photon[]): Photon[];
    render(): void;
}
export default Chevron;
