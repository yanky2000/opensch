import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { CharacterCard } from './CharacterCard';
import { ICharacterVars, ICharacterData, IDeletedCharacterData } from 'models';
import { GET_CHARACTERS, GET_ALL_DELETED_CHARACTERS } from 'Apollo/queries';
import { removeDeleted } from 'utils';

const CharacterListUl = styled.ul`
    list-style: none;
`;

export const CharactersList: React.FC<{ searchString: string }> = ({ searchString }) => {
    const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS, {
        variables: { name: searchString },
    });

    const deletedIds = useQuery<IDeletedCharacterData>(GET_ALL_DELETED_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    let characters = data && data.characters && data.characters.results && data.characters.results;

    if (deletedIds.data) {
        characters = removeDeleted(characters, deletedIds.data.deleted);
    }

    return (
        <>
            {!!characters.length ? (
                <CharacterListUl>
                    {characters.map(character => (
                        <li key={character.id}>
                            <CharacterCard {...character} />
                        </li>
                    ))}
                </CharacterListUl>
            ) : (
                <h1>No characters found!</h1>
            )}
        </>
    );
};
