import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { CharactersList } from './CharactersList';
import { PairSlots } from './PairSlots';

export const Home: React.FC = () => {
    const [searchString, setSearchString] = useState('');

    return (
        <>
            <SearchForm cb={setSearchString} />
            <PairSlots />
            <CharactersList searchString={searchString} />
        </>
    );
};
