export default class HSVColorChevron {
    public readonly hue: number;
    public readonly saturation: number;
    public readonly value: number;
    public readonly frequency: number;
    public constructor(hsv: { hue: number, saturation: number, value: number } | null, frequency: number | null = null) {
        if (hsv !== null) {
            this.hue = hsv.hue;
            this.saturation = hsv.saturation;
            this.value = hsv.value;
            this.frequency = HSVColorChevron.hueToFrequency(hsv.hue);
            if (frequency !== null && this.frequency != frequency) {
                throw new Error(`Frequency ${frequency} does not match hue ${hsv.hue}`);
            }
        } else if (frequency !== null) {
            this.frequency = frequency;
            const { hue, saturation, value } = HSVColorChevron.frequencyToHue(frequency);
            this.hue = hue;
            this.saturation = saturation;
            this.value = value;
        } else {
            throw new Error(`Neither hsv nor frequency were provided`);
        }
    }
    private static hueToFrequency(hue: number): number {
        throw new Error(`Not implemented`);
        return 0;
    }
    private static frequencyToHue(frequency: number): { hue: number, saturation: number, value: number } {
        throw new Error(`Not implemented`);
        return { hue: 0, saturation: 0, value: 0 };
    }
    public static calculateRotation(numberOfChevrons: number, chevronIndex: number, chevron: HSVColorChevron): number {
        if (numberOfChevrons < 1 || chevronIndex < 0 || chevronIndex >= numberOfChevrons) {
            throw new Error(`Invalid chevron index ${chevronIndex}/${numberOfChevrons}`);
        }
        // there are 2pi radians in a circle
        // there are numberOfChevrons chevrons in a circle
        const radiansPerChevron = 2 * Math.PI / numberOfChevrons;
        const chevronRadianOffset = radiansPerChevron * chevronIndex;
        // the hue itself is a number between 0 and 1 and taken as a percentage of the circle
        const hueRadians = chevron.hue * 2 * Math.PI;
        
        return 0;
    }
}