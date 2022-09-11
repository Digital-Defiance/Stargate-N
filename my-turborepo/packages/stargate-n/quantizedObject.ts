import { randomUUID } from "crypto";
import ObjectQuanta from "./objectQuanta";
import QuantizedObjectType from "./quantizedObjectType";

export default class QuantizedObject
{
    public readonly id: string;
    public readonly quanta: Array<ObjectQuanta>;
    public readonly checksum: string;
    public readonly dataType: QuantizedObjectType;
    public constructor(quanta: Array<ObjectQuanta>, checksum: string, type: QuantizedObjectType) {
        this.id = randomUUID();
        this.quanta = quanta;
        this.checksum = checksum;
        this.dataType = type;
    }
}