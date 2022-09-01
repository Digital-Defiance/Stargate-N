import IStargateOperation from "../operations/iStargateOperation";
import Quanta from "../../quanta/quanta";
import TransformedQuanta from "../../quanta/transformedQuanta";

export default abstract class StargateOperation implements IStargateOperation {
    public abstract operate(quanta: Quanta | TransformedQuanta): TransformedQuanta;
}
