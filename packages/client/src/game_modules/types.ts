export interface CustomWindow extends Window {
    keys: Record<string, unknown>;
}

export type Position = {
    xPos: number;
    yPos: number;
};

export type Size = {
    width: number;
    height: number;
};

export enum ObstaclesType {
    GroundObject = 0,
    FlyingObject = 1,
}

export type GameEndEvent = {
    gameScore: number
}
