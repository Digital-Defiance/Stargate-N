import ObjectQuanta from "./objectQuanta";
import TransformedQuanta from "./transformedQuanta";

export default function noOperation(quanta: ObjectQuanta | TransformedQuanta): TransformedQuanta {
    return new TransformedQuanta(quanta, quanta.frequency, quanta.emState, quanta.spin);
}