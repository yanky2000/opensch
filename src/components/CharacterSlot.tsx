import React from 'react';
import { ICharacter } from 'models';
import styled from 'styled-components';

const Slot = styled.div`
    width: 180px;
    height: 220px;
`;

const EmptySlot = styled(Slot)`
    background-color: grey;
`;

export const CharacterSlot: React.FC<Partial<ICharacter>> = ({ name, image }) => {
    if (!image) return <EmptySlot>{name}</EmptySlot>; // <h1> sorry</h1>

    return <div>{name}</div>;
};
