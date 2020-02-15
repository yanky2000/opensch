export const THROTTLE_DELAY_MS = 300;
export const QUERY_MIN_CHAR_LENGTH = 2;

export enum CHARACTERS {
    Rick = 'Rick',
    Morty = 'Morty',
}
export enum POSITIONS {
    left = 'left',
    right = 'right',
}

export const SLOT_POSITIONS = {
    [CHARACTERS.Rick]: POSITIONS.left,
    [CHARACTERS.Morty]: POSITIONS.right,
};
