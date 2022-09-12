import { randomUUID } from "crypto";
import StargateRotor from "./rotor/rotor";
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'

export default class StargateMachine {
    public readonly id: string;
    public readonly rotors: Array<StargateRotor>;
    private channelOpen: boolean;
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
    
    public canOpenStargate(): { canOpen: boolean, reason: string | null } {
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
    public closeStargate(immediate = false): StargateMachine {
        if (!this.channelOpen) {
            throw new Error(`Stargate not open`);
        }
        if (!immediate) {
            // check for any remaining data in the input stream or at any of the gates
            // flush any remaining data
        }
        for (let i = 0; i < this.rotors.length; i++) {
        }
        this.channelOpen = false;
        return this;
    }
    public foo() {
       if (this.stateMachine === undefined) {
           return;
       }
    }
}