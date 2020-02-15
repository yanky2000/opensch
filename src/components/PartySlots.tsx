import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SELECTED } from 'Apollo/queries';
import { ISelectedCharacterData } from 'models';
import { CharacterItem } from './elements/';
import styled from 'styled-components';

const PartySlotsContainer = styled.div`
    h1 {
        font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
    }
    ul {
        display: flex;
        padding: 0;
        margin: 0;
        justify-content: center;
    }
`;

export const PartySlots: React.FC = () => {
    const { loading, error, data } = useQuery<ISelectedCharacterData>(GET_ALL_SELECTED);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    return (
        <PartySlotsContainer>
            <h1>PARTY</h1>
            <ul>
                {Object.values(data.selected).map(character => (
                    <CharacterItem key={character.id} {...character} />
                ))}
            </ul>
        </PartySlotsContainer>
    );
};
