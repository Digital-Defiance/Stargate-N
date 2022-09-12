import HSVColorChevron from "./hsvColorChevron";
import { NamedHsvColorChevronType } from "./namedHsvColorChevronType";

export const NamedHsvColorChevronMap = new Map<NamedHsvColorChevronType, HSVColorChevron>([
    [NamedHsvColorChevronType.Black, new HSVColorChevron({hue: 0, saturation: 0, value: 0})],
]);

export function getChevronColor(name: NamedHsvColorChevronType): HSVColorChevron {
    const value = NamedHsvColorChevronMap.get(name);
    if (value === undefined) {
        throw new Error(`Unknown chevron ${name}`);
    }
    return value;
}

export function lookupChevronColorName(chevron: HSVColorChevron): NamedHsvColorChevronType {
    let result: NamedHsvColorChevronType | null = null;
    NamedHsvColorChevronMap.forEach((value: HSVColorChevron, key: NamedHsvColorChevronType) => {
        if (value.hue === chevron.hue && value.saturation === chevron.saturation && value.value === chevron.value) {
            result = key;
        }
    });
    if (result === null) {
        throw new Error(`Unknown chevron ${chevron}`);
    }
    return result;
}