import { complex } from "mathjs";
import Quanta from "../../quanta/quanta";
import TransformedQuanta from "../../quanta/transformedQuanta";

export default function swapIJ(quanta: Quanta | TransformedQuanta): TransformedQuanta {
    return new TransformedQuanta(
        quanta,
        quanta.frequency,
        complex(
            quanta.emState.im, // normally the real portion
            quanta.emState.re), // normally the imaginary portion
        quanta.spin);
}