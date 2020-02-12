import React from 'react';
import { MORTY, RICK, POSITIONS } from '../constants';
import { CharacterSlot } from './CharacterSlot';

export const PairSlots: React.FC = () => {
    const targetCharacters = [MORTY, RICK];

    return (
        <>
            {Object.keys(POSITIONS).map((position) => (
                <CharacterSlot key={position} position={position} />
            ))}

            {/* {targetCharacters.map(name => (
                <CharacterSlot key={name} name={name} />
            ))} */}
        </>
    );
};
