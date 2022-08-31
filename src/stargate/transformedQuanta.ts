import { randomUUID } from "crypto";
import ObjectQuanta from "./objectQuanta";
import QuantizedObject from "./quantizedObject";

export default class TransformedQuanta extends ObjectQuanta
{
    public override readonly id: string;
    public readonly originalId: string;
    public readonly transformationDate: Date;
    public constructor(originalQuanta: ObjectQuanta, transformationDate: Date | null = null) {
        const date = transformationDate === null ? new Date() : transformationDate;
        super(originalQuanta.associatedObject, originalQuanta.sequence, originalQuanta.checksum);
        this.id = randomUUID();
        this.originalId = originalQuanta.id;
        this.transformationDate = date;
    }
}