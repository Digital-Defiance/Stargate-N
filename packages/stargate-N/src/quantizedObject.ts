import { randomUUID } from "crypto";
import Quanta from "./quanta/quanta";
import QuantizedObjectType from "./quantizedObjectType";

/**
 * @description This is the base class for all objects that can be quantized.
 * It gives the object a unique ID, a checksum, and a type.
 */
export default class QuantizedObject
{
    public readonly id: string;
    public readonly quanta: Array<Quanta>;
    public readonly checksum: string;
    public readonly dataType: QuantizedObjectType;
    public constructor(quanta: Array<Quanta>, checksum: string, type: QuantizedObjectType) {
        this.id = randomUUID();
        this.quanta = quanta;
        this.checksum = checksum;
        this.dataType = type;
    }
}