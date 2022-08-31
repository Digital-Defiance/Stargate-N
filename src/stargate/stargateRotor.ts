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
    public constructor(stargate: StargateMachine, configuration: RotorConfiguration) {
        this.id = randomUUID();
        this.stargate = stargate;
        this.configuration = configuration;
        this.operations = [
            StargateOperationType.NoOperation,
        ]; // TODO: get from configuration
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