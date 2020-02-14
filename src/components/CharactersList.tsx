import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ICharacterVars, ICharacterData, ICharacter } from 'models';
import { CharacterCard } from './CharacterCard';
import { GET_CHARACTERS, GET_ALL_SELECTED, GET_DELETED_CHARACTERS } from 'Apollo/queries';
import { ADD_SELECTED } from 'Apollo/mutations';
import styled from 'styled-components';

const CharacterListUl = styled.ul`
    list-style: none;
`;

export const CharactersList: React.FC<{ searchString: string }> = ({ searchString }) => {
    const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS, {
        variables: { name: searchString },
    });

    const deleted = useQuery(GET_DELETED_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    function removeDeleted(arr: ICharacter[] = []): ICharacter[] | [] {
        if (!arr) return [];
        return arr.filter(({ id }) => !deleted.data.deletedCharacterIds.includes(id));
    }

    let characters = data && data.characters && data.characters.results && data.characters.results;

    characters = removeDeleted(characters);

    return (
        <>
            {characters.length ? (
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
