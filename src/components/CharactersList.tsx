import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ICharacterVars, ICharacterData } from 'models';
import { CharacterItem } from './CharacterItem';
import { GET_CHARACTERS } from 'Apollo/queries';

export const CharactersList: React.FC = () => {
    const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    return (
        <ul>
            <h1>hello</h1>
            {data &&
                data.characters &&
                data.characters.results &&
                data.characters.results.map(character => <CharacterItem key={character.id} {...character} />)}
        </ul>
    );
};
