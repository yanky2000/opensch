import React from 'react';
import { MORTY, RICK, POSITIONS } from '../constants';
import { CharacterSlot } from './CharacterSlot';
import { CharacterItem } from './CharacterItem';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SELECTED } from 'Apollo/queries';
import { ICharacter, ISelectedCharacter } from 'models';

export const PairSlots: React.FC = () => {
    // const targetCharacters = [MORTY, RICK];
    const { loading, error, data } = useQuery(GET_ALL_SELECTED);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    console.log(234, Object.values(data.selected));

    const { selected } = data;
    // console.log('left', left, 'right', right)
    const persons: ISelectedCharacter[] = Object.values(selected);

    return (
        <>
            {/* hel */}
            {persons.map((character: ISelectedCharacter & { position: string }) => (
                <CharacterItem key={character.id}  {...character} />
            ))}

            {/* {targetCharacters.map(name => (
                <CharacterSlot key={name} name={name} />
            ))} */}
        </>
    );
};
