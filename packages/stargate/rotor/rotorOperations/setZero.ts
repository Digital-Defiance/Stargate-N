import { complex } from "mathjs";
import Quanta from "../../quanta/quanta";
import TransformedQuanta from "../../quanta/transformedQuanta";

export default function setZero(quanta: Quanta | TransformedQuanta): TransformedQuanta {
    return new TransformedQuanta(quanta, 0, complex(0,0), 0);
}