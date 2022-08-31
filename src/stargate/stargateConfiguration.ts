import RotorConfiguration from "./rotorConfiguration";

export default class StargateConfiguration {
    public readonly rotorConfigurations: Array<RotorConfiguration>;
    public constructor(rotorConfigurations: Array<RotorConfiguration>) {
        this.rotorConfigurations = rotorConfigurations;
    }
}