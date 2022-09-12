import { randomUUID } from "crypto";
import QuantizedObject from "../quantizedObject";
import { Photons } from "quantum-tensors";
export default class Quanta {
    public readonly id: string;
    public readonly associatedObject: QuantizedObject;
    public readonly sequence: bigint;
    public readonly checksum: string;
    public readonly creationDate: Date;
    public readonly photons: Photons;
    public constructor(associatedObject: QuantizedObject, sequence: bigint, photons: Photons) {
        const date = new Date();
        this.id = randomUUID();
        this.associatedObject = associatedObject;
        this.sequence = sequence;
        this.creationDate = date;
        // TODO: add quanta physical properties (eg spin, frequency, etc)
        this.photons = photons;
        // TODO: implement checksum
        this.checksum = "TODO";
    }
}