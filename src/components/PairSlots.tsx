import React from 'react';
import { CharacterItem } from './CharacterItem';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SELECTED } from 'Apollo/queries';
import { ISelectedCharacter } from 'models';

export const PairSlots: React.FC = () => {
    const { loading, error, data } = useQuery(GET_ALL_SELECTED);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    const persons: ISelectedCharacter[] = Object.values(data.selected);

    return (
        <>
            <h1>PARTY</h1>
            {persons.map((character: ISelectedCharacter & { position: string }) => (
                <CharacterItem key={character.id} {...character} />
            ))}
        </>
    );
};
