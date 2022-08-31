import ObjectQuanta from "./objectQuanta";
import TransformedQuanta from "./transformedQuanta";

export default interface IStargateOperation {
    operate(quanta: ObjectQuanta | TransformedQuanta): TransformedQuanta;
}
