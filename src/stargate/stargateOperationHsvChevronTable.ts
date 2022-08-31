import HSVColorChevron from "./hsvColorChevron";
import { getChevronColor } from "./namedHsvColorChevronMap";
import { NamedHsvColorChevronType } from "./namedHsvColorChevronType";
import StargateOperationType from "./stargateOperationType";

export const StargateOperationHsvChevronTable: Map<HSVColorChevron, StargateOperationType> = new Map<HSVColorChevron, StargateOperationType>([
    [getChevronColor(NamedHsvColorChevronType.Black), StargateOperationType.NoOperation]
]);

// reverse lookup
const reverseMap = new Map<StargateOperationType, HSVColorChevron>();
StargateOperationHsvChevronTable.forEach((value, key) => {
    const operation = value;
    const chevron = key;
    StargateOperationsReverseTable.set(operation, chevron);
});

export const StargateOperationsReverseTable: Map<StargateOperationType, HSVColorChevron> = reverseMap;

export function getOperationChevron(chevron: HSVColorChevron): StargateOperationType {
    const value = StargateOperationHsvChevronTable.get(chevron);
    if (value === undefined) {
        throw new Error(`Unknown chevron ${chevron}`);
    }
    return value;
}

export function getChevronOperation(operation: StargateOperationType): HSVColorChevron {
    const value = StargateOperationsReverseTable.get(operation);
    if (value === undefined) {
        throw new Error(`Unknown operation ${operation}`);
    }
    return value;
}