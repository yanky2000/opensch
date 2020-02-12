import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ICharacterVars, ICharacterData } from 'models';
import { CharacterItem } from './CharacterItem';
import { GET_CHARACTERS, GET_DELETED_CHARACTERS, GET_SELECTED_CHARACTERS, GET_ALL_SELECTED } from 'Apollo/queries';
import { ADD_SELECTED } from 'Apollo/mutations';

export const CharactersList: React.FC<{ searchString: string }> = ({ searchString }) => {
    const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS, {
        variables: { name: searchString },
    });

    const [selectCharacter, _] = useMutation(ADD_SELECTED);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    function Test() {
        const { data } = useQuery(GET_DELETED_CHARACTERS);
        return <div>Deleted ids: {JSON.stringify(data.deletedCharacterIds)}</div>;
    }
    function Selected() {
        const { data } = useQuery(GET_SELECTED_CHARACTERS);
        return <div>Selcted ids: {JSON.stringify(data)}</div>;
    }
    function Left() {
        const { data } = useQuery(GET_ALL_SELECTED);
        return <div>Selected ids: {JSON.stringify(data.selected)}</div>;
    }
    const handle = () => {
        selectCharacter({ variables: { position: 'right' } });
    };
    return (
        <ul>
            <Test />
            <Left />
            {data &&
                data.characters &&
                data.characters.results &&
                data.characters.results.map(character => <CharacterItem key={character.id} {...character} />)}
                
        </ul>
    );
};
