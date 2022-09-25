declare class Vector {
    protected x: number;
    protected y: number;
    protected z: number;
    constructor(x: number, y: number, z: number);
}
declare class UnitVector extends Vector {
    constructor(x: number, y: number, z: number);
    reNormalize(): void;
}
