import { randomUUID } from "crypto";
import StargateOperation from "./operations/stargateOperation";

/** This needs to get loaded into the redux store */
export default class RotorConfiguration {
    public readonly id: string = randomUUID();
    public readonly chevrons: Array<StargateOperation>;
    public readonly lockedChevrons: Array<number>;
    public readonly chevronFunctions: Array<(quanta: any) => any>;
    public constructor(chevrons: Array<StargateOperation>, chevronFunctions: Array<(quanta: any) => any>) {
        this.chevrons = chevrons;
        this.lockedChevrons = [];
        this.chevronFunctions = chevronFunctions;
    }
    public lockChevron(chevronIndex: number): void {
        if (this.lockedChevrons.length >= this.chevrons.length) {
            throw new Error(`Maximum number of chevrons locked`);
        }
        // check if chevron is already locked
        for (const lockedChevron of this.lockedChevrons) {
            if (lockedChevron === chevronIndex) {
                throw new Error(`Chevron already locked`);
            }
        }
        this.lockedChevrons.push(chevronIndex );
    }
}