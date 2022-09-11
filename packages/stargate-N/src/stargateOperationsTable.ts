import ObjectQuanta from "./objectQuanta";
import StargateOperationType from "./stargateOperationType";
import TransformedQuanta from "./transformedQuanta";

const startgateOperationsMap = new Map<StargateOperationType, (quanta: ObjectQuanta | TransformedQuanta) => TransformedQuanta>([
    [StargateOperationType.NoOperation, (quanta: ObjectQuanta | TransformedQuanta): TransformedQuanta => { return new TransformedQuanta(quanta); }]
]);

export default startgateOperationsMap;