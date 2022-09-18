import Quanta from "../../quanta/quanta";
import TransformedQuanta from "../../quanta/transformedQuanta";
import IStargateOperation from "./iStargateOperation";
import StargateOperation from "./stargateOperation";

export default class NoOperation extends StargateOperation implements IStargateOperation {
    operate(quanta: Quanta | TransformedQuanta): TransformedQuanta {
        return new TransformedQuanta(quanta, quanta.photons);
    }
}