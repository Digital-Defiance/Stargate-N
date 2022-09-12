import Quanta from "../../quanta/quanta";
import noOperation from "./noOp";
import setZero from "./setZero";
import swapIJ from "./swapIJ";
import StargateOperationType from "./type";
import TransformedQuanta from "../../quanta/transformedQuanta";

const startgateOperationsMap = new Map<StargateOperationType, (quanta: Quanta | TransformedQuanta) => TransformedQuanta>([
    [StargateOperationType.NoOperation, noOperation],
    [StargateOperationType.Zero, setZero],
    [StargateOperationType.SwapIJ, swapIJ]
]);

export default startgateOperationsMap;