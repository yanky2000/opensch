import { RICK, SLOT_POSITIONS, MORTY } from './constants';
import { ICharacter, IAllSlotPositions } from './models';

export const getSlotPosition = (name: ICharacter['name']): IAllSlotPositions | null => {
    if (name.includes(RICK)) return SLOT_POSITIONS[RICK];
    if (name.includes(MORTY)) return SLOT_POSITIONS[MORTY];

    return null;
};
