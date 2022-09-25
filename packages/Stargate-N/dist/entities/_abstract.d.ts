import Photon from "./photon";
declare type uuid = string;
export default abstract class Machine {
    id: uuid;
    constructor();
    abstract process(photons: Photon[]): Photon[];
}
export declare abstract class Particle {
}
export {};
