import { randomUUID } from "crypto";
import HSVColorChevron from "./hsvColorChevron";

/** This probably needs to involve a redux store */
export default class RotorConfiguration {
    public readonly id: string = randomUUID();
    public readonly chevrons: Array<HSVColorChevron>;
    public readonly lockedChevrons: Array<{ chevron: HSVColorChevron, chevronIndex: number }>;
    public constructor(chevrons: Array<HSVColorChevron>, chevronFunctions: Array<(quanta: any) => any>) {
        this.chevrons = chevrons;
        this.lockedChevrons = [];
    }
    public lockChevron(chevron: HSVColorChevron, chevronIndex: number): void {
        if (this.lockedChevrons.length >= this.chevrons.length) {
            throw new Error(`Maximum number of chevrons locked`);
        }
        // check if chevron is already locked
        for (const lockedChevron of this.lockedChevrons) {
            if (lockedChevron.chevron === chevron) {
                throw new Error(`Chevron already locked`);
            }
        }
    }
}