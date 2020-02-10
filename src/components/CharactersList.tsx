import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ICharacterVars, ICharacterData } from 'models';
import { CharacterItem } from './CharacterItem';
import { GET_CHARACTERS, GET_TEST } from 'Apollo/queries';

export const CharactersList: React.FC<{ searchString: string }> = ({ searchString }) => {
    const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS, {
        variables: { name: searchString },
    });

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;


        function Test() {
            const {data} = useQuery(GET_TEST)
            return (<div>{data.isInCart}</div>)
        }
    return (
        <ul>
            <h1>hello</h1>
            <Test />
            {data &&
                data.characters &&
                data.characters.results &&
                data.characters.results.map(character => <CharacterItem key={character.id} {...character} />)}
        </ul>
    );
};
