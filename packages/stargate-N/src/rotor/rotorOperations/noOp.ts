import Quanta from "../../quanta/quanta";
import TransformedQuanta from "../../quanta/transformedQuanta";

export default function noOperation(quanta: Quanta | TransformedQuanta): TransformedQuanta {
    return new TransformedQuanta(quanta, quanta.frequency, quanta.emState, quanta.spin);
}