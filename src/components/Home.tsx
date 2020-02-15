import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { CharactersList } from './CharactersList';
import { PartySlots } from './PairSlots';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Home: React.FC = () => {
    const [searchString, setSearchString] = useState('');

    return (
        <HomeContainer>
            <SearchForm cb={setSearchString} />
            <CharactersList searchString={searchString} />
            <PartySlots />
        </HomeContainer>
    );
};
