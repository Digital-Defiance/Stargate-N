import HSVColorChevron from "./hsvColorChevron";

import * as fs from 'fs';
import * as util from 'util'
import { Readable, Writable } from 'stream';
import StargateMachine from "./stargateMachine";
import RotorConfiguration from "./rotorConfiguration";
import { randomUUID } from "crypto";
import StargateOperationType from "./stargateOperationType";

export default class StargateRotor {
    public readonly id: string;
    public readonly stargate: StargateMachine;
    public readonly configuration: RotorConfiguration;
    public readonly operations: Array<StargateOperationType>;
    public readonly chevronList: Array<HSVColorChevron>;
    /**
     * list of chevrons in order, starting at 0 degrees.
     * total radians per chevron is 2 * Math.PI / chevronList.length
     */
    public readonly engagedChevrons: Array<HSVColorChevron>;
    public constructor(stargate: StargateMachine, configuration: RotorConfiguration) {
        this.id = randomUUID();
        this.stargate = stargate;
        this.configuration = configuration;
        this.operations = [
            StargateOperationType.NoOperation,
        ]; // TODO: get from configuration
        this.chevronList = [
            new HSVColorChevron({ hue: 0, saturation: 0, value: 0 }), // no operation. TODO: DRY/shortcut
        ]; // TODO: get from configuration
        this.engagedChevrons = [];
    }

    private isStargateOpen(): boolean {
        return this.stargate.isStargateOpen();
    }
    public receiveQuanta(data: Buffer): Buffer {
        if (!this.isStargateOpen()) {
            throw new Error(`Stargate not open`);
        }
        throw new Error(`Not implemented`);
    }
}