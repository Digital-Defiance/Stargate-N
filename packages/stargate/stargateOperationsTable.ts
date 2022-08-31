import ObjectQuanta from "./objectQuanta";
import noOperation from "./stargateOperations.NoOp";
import setZero from "./stargateOperations.SetZero";
import swapIJ from "./stargateOperations.SwapIJ";
import StargateOperationType from "./stargateOperationType";
import TransformedQuanta from "./transformedQuanta";

const startgateOperationsMap = new Map<StargateOperationType, (quanta: ObjectQuanta | TransformedQuanta) => TransformedQuanta>([
    [StargateOperationType.NoOperation, noOperation],
    [StargateOperationType.Zero, setZero],
    [StargateOperationType.SwapIJ, swapIJ]
]);

export default startgateOperationsMap;