import { randomUUID } from "crypto";
import { Complex } from "mathjs";
import ObjectQuanta from "./objectQuanta";

/** A Transformed Quanta is just a quanta that has undergone an operation and maintains a reference to the previous state */
export default class TransformedQuanta extends ObjectQuanta
{
    public override readonly id: string;
    public readonly originalId: string;
    public readonly transformationDate: Date;
    public constructor(originalQuanta: ObjectQuanta, frequency: number, emState: Complex, spin: number, transformationDate: Date | null = null) {
        const date = transformationDate === null ? new Date() : transformationDate;
        super(originalQuanta.associatedObject, originalQuanta.sequence + 1n, frequency, emState, spin);
        this.id = randomUUID();
        this.originalId = originalQuanta.id;
        this.transformationDate = date;
    }
}