import React from 'react';
import { ICharacter, ISelectedCharacter } from '../../models';
import styled from 'styled-components';

interface IProps {
    cb?: (e: React.MouseEvent) => void;
}

const CharacterCardDiv = styled.div<{ url: string }>`
    /* display: flex; */
    position: relative;
    width: 180px;
    height: 200px;
    background: ${({ url }): string => `url("${url}")`};
    background-size: cover;
`;

export const CharacterItem: React.FC<(ICharacter | ISelectedCharacter) & IProps> = ({ image, cb, children }) => {
    return (
        <CharacterCardDiv url={image} onClick={cb}>
            {children}
        </CharacterCardDiv>
    );
};
