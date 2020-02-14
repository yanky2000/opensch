import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ICharacterVars, ICharacterData, ICharacter } from 'models';
import { CharacterItem } from './CharacterItem';
import { GET_CHARACTERS, GET_ALL_SELECTED, GET_DELETED_CHARACTERS } from 'Apollo/queries';
import { ADD_SELECTED } from 'Apollo/mutations';

export const CharactersList: React.FC<{ searchString: string }> = ({ searchString }) => {
    const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS, {
        variables: { name: searchString },
    });

    // const [selectCharacter] = useMutation(ADD_SELECTED);
    const deleted = useQuery(GET_DELETED_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    // function Test() {
    //     return <div>Deleted ids: {JSON.stringify(deleted.data.deletedCharacterIds)}</div>;
    // }
    // function Left() {
    //     const { data } = useQuery(GET_ALL_SELECTED);
    //     return <div>Selected ids: {JSON.stringify(data.selected)}</div>;
    // }

    let characters = data && data.characters && data.characters.results && data.characters.results;

    function removeDeleted(arr: ICharacter[] = []): ICharacter[] | [] {
        if (!arr) return [];
        return arr.filter(({ id }) => !deleted.data.deletedCharacterIds.includes(id));
    }

    characters = characters ? removeDeleted(characters) : [];
    if (!characters.length) return <h1>No characters found!</h1>;

    return (
        <ul>
            {characters.map(character => (
                <CharacterItem key={character.id} {...character} />
            ))}
        </ul>
    );
};
