import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SELECTED } from 'Apollo/queries';
import { ISelectedCharacterData } from 'models';
import { CharacterItem } from './elements/CharacterItem';
import styled from 'styled-components';

const PartySlotsContainer = styled.div`
    display: flex;
`;

export const PartySlots: React.FC = () => {
    const { loading, error, data } = useQuery<ISelectedCharacterData>(GET_ALL_SELECTED);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    return (
        <>
            <h1>PARTY</h1>
            <PartySlotsContainer>
                {Object.values(data.selected).map(character => (
                    <CharacterItem key={character.id} {...character} />
                ))}
            </PartySlotsContainer>
        </>
    );
};
