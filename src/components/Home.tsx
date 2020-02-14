import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { CharactersList } from './CharactersList';
import { PartySlots } from './PairSlots';

export const Home: React.FC = () => {
    const [searchString, setSearchString] = useState('');

    return (
        <>
            <SearchForm cb={setSearchString} />
            <PartySlots />
            <CharactersList searchString={searchString} />
        </>
    );
};
