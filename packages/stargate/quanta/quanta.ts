import { randomUUID } from "crypto";
import QuantizedObject from "../quantizedObject";
import { Complex } from "mathjs";
export default class Quanta {
    public readonly id: string;
    public readonly associatedObject: QuantizedObject;
    public readonly sequence: bigint;
    public readonly checksum: string;
    public readonly creationDate: Date;
    public readonly frequency: number;
    public readonly emState: Complex;
    public readonly spin: number;
    public constructor(associatedObject: QuantizedObject, sequence: bigint, frequency: number, emState: Complex, spin: number) {
        const date = new Date();
        this.id = randomUUID();
        this.associatedObject = associatedObject;
        this.sequence = sequence;
        this.creationDate = date;
        // TODO: add quanta physical properties (eg spin, frequency, etc)
        this.frequency = frequency;
        this.emState = emState;
        this.spin = spin; // negative spin?
        // TODO: implement checksum
        this.checksum = "TODO";
    }
}