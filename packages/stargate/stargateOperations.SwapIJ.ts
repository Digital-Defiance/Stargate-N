import { complex } from "mathjs";
import ObjectQuanta from "./objectQuanta";
import TransformedQuanta from "./transformedQuanta";

export default function swapIJ(quanta: ObjectQuanta | TransformedQuanta): TransformedQuanta {
    return new TransformedQuanta(
        quanta,
        quanta.frequency,
        complex(
            quanta.emState.im, // normally the real portion
            quanta.emState.re), // normally the imaginary portion
        quanta.spin);
}