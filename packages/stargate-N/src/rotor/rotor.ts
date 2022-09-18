import HSVColorChevron from "../hsvColorChevron";
import StargateMachine from "../stargateMachine";
import RotorConfiguration from "../rotor/configuration";
import { randomUUID } from "crypto";
import StargateOperationType from "./operations/type";
import { getChevronColor } from "../namedHsvColorChevronMap";
import { NamedHsvColorChevronType } from "../namedHsvColorChevronType";

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
    public readonly radiansPerChevron: number;
    public constructor(stargate: StargateMachine, configuration: RotorConfiguration) {
        this.id = randomUUID();
        this.stargate = stargate;
        this.configuration = configuration;
        this.operations = [
            StargateOperationType.NoOperation,
        ]; // TODO: get from configuration
        this.chevronList = [
            getChevronColor(NamedHsvColorChevronType.Black), // no operation.
        ]; // TODO: get from configuration
        this.radiansPerChevron = 2 * Math.PI / this.chevronList.length;
        this.engagedChevrons = [];
    }

    private isStargateOpen(): boolean {
        return this.stargate.isStargateOpen();
    }
    public canReceive(): boolean {
        return this.isStargateOpen();
    }
    public canSend(): boolean {
        return this.isStargateOpen();
    }
    public receiveQuanta(data: Buffer): Buffer {
        if (!this.canReceive()) {
            throw new Error(`Stargate not open`);
        }
        console.log(data);
        throw new Error(`Not implemented`);
    }
}