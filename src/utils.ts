import { SLOT_POSITIONS, CHARACTERS } from './constants';
import { ICharacter, IAllSlotPositions, IId } from './models';

export const getSlotPosition = (name: ICharacter['name']): IAllSlotPositions | null => {
    if (name.includes(CHARACTERS.Rick)) return SLOT_POSITIONS[CHARACTERS.Rick];
    if (name.includes(CHARACTERS.Morty)) return SLOT_POSITIONS[CHARACTERS.Morty];

    return null;
};

export const removeDeleted = (arr: ICharacter[] = [], deleted: IId[] = []): ICharacter[] | [] => {
    if (!arr) return [];
    if (!deleted.length) return arr;
    return arr.filter(({ id }) => !deleted.includes(id));
};
