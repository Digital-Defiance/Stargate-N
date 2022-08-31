import HSVColorChevron from "./hsvColorChevron";
import StargateOperationType from "./stargateOperationType";

const StargateOperationHsvChevronTable: Map<HSVColorChevron, StargateOperationType> = new Map<HSVColorChevron, StargateOperationType>([
    [new HSVColorChevron({hue: 0, saturation: 0, value: 0}), StargateOperationType.NoOperation]
]);