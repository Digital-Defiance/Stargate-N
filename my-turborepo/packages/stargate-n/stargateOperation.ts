import IStargateOperation from "./iStargateOperation";
import ObjectQuanta from "./objectQuanta";
import TransformedQuanta from "./transformedQuanta";

export default abstract class StargateOperation implements IStargateOperation {
    public abstract operate(quanta: ObjectQuanta | TransformedQuanta): TransformedQuanta;
}
