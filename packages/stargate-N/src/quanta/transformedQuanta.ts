import { randomUUID } from "crypto";
import Quanta from "./quanta";
import { Photons } from "quantum-tensors";

/** A Transformed Quanta is just a quanta that has undergone an operation and maintains a reference to the previous state */
export default class TransformedQuanta extends Quanta
{
    public override readonly id: string;
    public readonly originalId: string;
    public readonly transformationDate: Date;
    public constructor(originalQuanta: Quanta, photons: Photons, transformationDate: Date | null = null) {
        const date = transformationDate === null ? new Date() : transformationDate;
        super(originalQuanta.associatedObject, originalQuanta.sequence + BigInt(1), photons);
        this.id = randomUUID();
        this.originalId = originalQuanta.id;
        this.transformationDate = date;
    }
}