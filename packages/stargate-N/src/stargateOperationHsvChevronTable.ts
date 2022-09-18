import HSVColorChevron from "./hsvColorChevron";
import { getChevronColor } from "./namedHsvColorChevronMap";
import { NamedHsvColorChevronType } from "./namedHsvColorChevronType";
import StargateOperationType from "./rotor/operations/stargateOperationType";

/**
 * @description This is the list of all possible chevrons and their corresponding operations
 * TODO: in stargate there were other machines with other chevrons... maybe we should have a separate table for each rotor class?
 * could still use the default
 */
export const StargateOperationHsvChevronTable: Map<HSVColorChevron, StargateOperationType> = new Map<HSVColorChevron, StargateOperationType>([
    [getChevronColor(NamedHsvColorChevronType.Black), StargateOperationType.NoOperation],
    //[new HSVColorChevron({ hue: (4 / 360) * 2, saturation: 1.0, value: 1.0 }), StargateOperationType.QuantumH],
]);

// reverse lookup
const reverseMap = new Map<StargateOperationType, HSVColorChevron>();
StargateOperationHsvChevronTable.forEach((value, key) => {
    const operation = value;
    const chevron = key;
    reverseMap.set(operation, chevron);
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