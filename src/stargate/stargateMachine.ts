import { randomUUID } from "crypto";
import { Readable, Writable } from "stream";
import StargateRotor from "./stargateRotor";
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'

export default class StargateMachine {
    public readonly id: string;
    public readonly rotors: Array<StargateRotor>;
    private channelOpen: boolean;
    private readonly inputStreams: Array<Readable | null>;
    private readonly outputStreams: Array<Writable | null>;
    private readonly stateMachine: EnhancedStore;


    private testReducer(state = [], action: { type: string; }) {
        switch (action.type) {
          default:
            return state
        }
      }

    public constructor() {
        this.id = randomUUID();
        this.rotors = [];
        this.inputStreams = new Array<Readable | null>();
        this.outputStreams = new Array<Writable | null>();
        this.channelOpen = false;
        this.stateMachine = configureStore({
            reducer: {
              todos: this.testReducer,
            }
          });
    }
    public isStargateOpen(): boolean {
        return this.channelOpen;
    }
    public connectInput(inputStream: Readable): StargateMachine {
        if (this.channelOpen) {
            throw new Error(`Stargate already open`);
        } else if (this.inputStreams[0] !== null) {
            throw new Error(`First rotor already has input stream`);
        }
        this.inputStreams[0] = inputStream;
        return this;
    }
    private connectRotorInput(rotor: StargateRotor, inputStream: Readable): StargateMachine {
        if (this.channelOpen) {
            throw new Error(`Stargate already open`);
        }
        const rotorIndex = this.rotors.indexOf(rotor);
        if (rotorIndex < 0) {
            throw new Error(`Rotor not found`);
        }
        if (this.inputStreams[rotorIndex] !== null) {
            throw new Error(`Rotor already has input stream`);
        }
        this.inputStreams[rotorIndex] = inputStream;
        return this;
    }
    private connectRotorOutput(rotor: StargateRotor, outputStream: Writable): StargateMachine {
        if (this.channelOpen) {
            throw new Error(`Stargate already open`);
        }
        const rotorIndex = this.rotors.indexOf(rotor);
        if (rotorIndex < 0) {
            throw new Error(`Rotor not found`);
        }
        if (this.outputStreams[rotorIndex] !== null) {
            throw new Error(`Rotor already has output stream`);
        }
        this.outputStreams[rotorIndex] = outputStream;
        return this;
    }
    public canOpenStargate(): { canOpen: boolean, reason: string | null } {
        // check if all rotors have input streams
        // check if all rotors have output streams
        for (let i = 0; i < this.rotors.length; i++) {
            if (this.inputStreams[i] === null || this.outputStreams[i] === null) {
                return {
                    canOpen: false,
                    reason: `Rotor ${i} has no input or output stream`
                };
            }
        }
        return {
            canOpen: true,
            reason: null
        };
    }
    public openStargate(): StargateMachine {
        if (this.channelOpen) {
            throw new Error(`Stargate already open`);
        }
        const { canOpen, reason } = this.canOpenStargate();
        if (!canOpen && (reason === null)) {
            throw new Error(`Unknown error`);
        } else if (!canOpen && (reason !== null)) {
            throw new Error(reason);
        }
        this.channelOpen = true;
        return this;
    }
    public getOutput(): Writable {
        const output = this.outputStreams[this.outputStreams.length - 1];
        if (output === null) {
            throw new Error(`No output stream connected to last rotor`);
        }
        return output;
    }
    public closeStargate(immediate: boolean = false): StargateMachine {
        if (!this.channelOpen) {
            throw new Error(`Stargate not open`);
        }
        if (!immediate) {
            // check for any remaining data in the input stream or at any of the gates
            // flush any remaining data
        }
        for (let i = 0; i < this.rotors.length; i++) {
            this.inputStreams[i]?.destroy();
            this.inputStreams[i] = null;

            this.outputStreams[i]?.destroy();
            this.outputStreams[i] = null;
        }
        this.channelOpen = false;
        return this;
    }
    public pushData(data: Buffer): StargateMachine {
        if (!this.channelOpen) {
            throw new Error(`Stargate not open`);
        }
        let stepData = data;
        for (let i = 0; i < this.rotors.length; i++) {
            // write the data to the input stream of the rotor
            this.inputStreams[i]?.push(stepData);
            // transform the data
            const output = this.rotors[i].receiveQuanta(stepData);
            // write the data to the output stream of the rotor
            this.outputStreams[i]?.write(output);
            // replace the data we s with the transformed data, 
            stepData = output;
        }
        return this;
    }
}