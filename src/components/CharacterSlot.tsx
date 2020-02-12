import React from 'react';
import { ICharacter } from 'models';
import styled from 'styled-components';
import { POSITIONS } from '../constants';

const Slot = styled.div`
    width: 180px;
    height: 220px;
`;

const EmptySlot = styled(Slot)`
    background-color: grey;
`;

interface IProps {
    position: string;
}

export const CharacterSlot: React.FC<IProps> = props => {
    
    if (!props) return <EmptySlot>Oops</EmptySlot>; // <h1> sorry</h1>

    return <div>{props.position}</div>;
};
