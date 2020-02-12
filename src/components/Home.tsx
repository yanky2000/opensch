import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { CharactersList } from './CharactersList';
import { PairSlots } from './PairSlots';

export const Home: React.FC = () => {
    const [searchString, setSearchString] = useState('');
    // const c = {
    //     name: '',
    //     id: '',
    //     image: '',
    // };
    // const { loading, error, data } = useQuery<ICharacterData, ICharacterVars>(GET_CHARACTERS);

    return (
        <>
            <SearchForm cb={setSearchString} />
            <PairSlots />
            <CharactersList searchString={searchString} />
            {/* <CharacterSlot
                {...c}
                // name="hel"
                //  character = {name: '', id: ''}
            /> */}
        </>
    );
};
