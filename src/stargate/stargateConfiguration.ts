import RotorConfiguration from "./rotor/configuration";

export default class StargateConfiguration {
    public readonly rotorConfigurations: Array<RotorConfiguration>;
    public constructor(rotorConfigurations: Array<RotorConfiguration>) {
        this.rotorConfigurations = rotorConfigurations;
    }
}