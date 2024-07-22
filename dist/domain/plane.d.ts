/// <reference types="node" />
export declare class Plane {
    readonly id: string;
    currentPosition?: {
        x: number;
        y: number;
        z: number;
    };
    isOn?: boolean;
    intervals?: NodeJS.Timeout[];
    port?: string;
    constructor(id: string);
}
export declare class PlaneDto implements Partial<Plane> {
}
