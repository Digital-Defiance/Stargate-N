import { randomUUID } from "crypto";
import QuantizedObject from "./quantizedObject";
import { complex, Complex } from "mathjs";
export default class ObjectQuanta {
    public readonly id: string;
    public readonly associatedObject: QuantizedObject;
    public readonly sequence: bigint;
    public readonly checksum: string;
    public readonly creationDate: Date;
    public readonly frequency: number;
    public readonly emState: Complex;
    public readonly spin: number;
    public constructor(associatedObject: QuantizedObject, sequence: bigint, checksum: string) {
        const date = new Date();
        this.id = randomUUID();
        this.associatedObject = associatedObject;
        this.sequence = sequence;
        this.checksum = checksum;
        this.creationDate = date;
        // TODO: add quanta physical properties (eg spin, frequency, etc)
        this.frequency = 0;
        this.emState = complex(0, 0);
        this.spin = 0; // negative spin?
    }
}