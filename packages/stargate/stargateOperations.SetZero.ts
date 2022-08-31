import { complex } from "mathjs";
import ObjectQuanta from "./objectQuanta";
import TransformedQuanta from "./transformedQuanta";

export default function setZero(quanta: ObjectQuanta | TransformedQuanta): TransformedQuanta {
    return new TransformedQuanta(quanta, 0, complex(0,0), 0);
}