import React from 'react';
import { SearchForm } from './SearchForm';
import { CharactersList } from './CharactersList';
import { PairSlots } from './PairSlots';

export const Home: React.FC = () => {
    // const c = {
    //     name: '',
    //     id: '',
    //     image: '',
    // };
    // const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS);

    return (
        <>
            <SearchForm />
            <CharactersList />
            <PairSlots />
            {/* <CharacterSlot
                {...c}
                // name="hel"
                //  character = {name: '', id: ''}
            /> */}
        </>
    );
};
