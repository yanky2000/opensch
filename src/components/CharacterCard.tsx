import React from 'react';
import { ICharacter, ISelectedCharacter } from '../models';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DELETED, ADD_SELECTED } from 'Apollo/mutations';
import { getSlotPosition } from 'utils';
import { CloseCross } from './elements/CloseCross';
import { CharacterItem } from './elements/CharacterItem';

export const CharacterCard: React.FC<ICharacter | ISelectedCharacter> = character => {
    const { id, name } = character;

    const [deleteCharacter] = useMutation(ADD_DELETED);
    const [selectCharacter] = useMutation(ADD_SELECTED);

    const deleteCard = (e: React.MouseEvent): void => {
        e.stopPropagation();
        deleteCharacter({ variables: { id } });
    };

    const selectCard = (): void => {
        const slotPosition = getSlotPosition(name);
        if (!slotPosition) return;

        selectCharacter({ variables: { character, position: slotPosition } });
    };

    return (
        <div>
            <CharacterItem {...character} cb={selectCard}>
                <CloseCross cb={deleteCard} />
            </CharacterItem>
        </div>
    );
};
