import { randomUUID } from "crypto";
import ObjectQuanta from "./objectQuanta";

export default class QuantizedObject
{
    public readonly id: string;
    public readonly quanta: Array<ObjectQuanta>;
    public readonly checksum: string;
    public constructor(quanta: Array<ObjectQuanta>, checksum: string) {
        this.id = randomUUID();
        this.quanta = quanta;
        this.checksum = checksum;
    }
}