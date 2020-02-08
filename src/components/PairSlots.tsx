import React from 'react';
import { MORTY, RICK } from '../constants';
import { CharacterSlot } from './CharacterSlot';

export const PairSlots: React.FC = () => {
    const targetCharacters = [MORTY, RICK];

    return (
        <>
            {targetCharacters.map(name => (
                <CharacterSlot key={name} name={name} />
            ))}
        </>
    );
};
