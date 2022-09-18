import NoOperation from "./noOperation";
import StargateOperationType from "./stargateOperationType";
import StargateOperation from "./stargateOperation";

const startgateOperationsMap = new Map<StargateOperationType, StargateOperation>([
    [StargateOperationType.NoOperation, new NoOperation]
]);

export default startgateOperationsMap;