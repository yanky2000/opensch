import React from 'react';
import styled from 'styled-components';
import { ICharacter, ISelectedCharacter } from '../../models';

interface IProps {
    title?: string;
    cb?: (e: React.MouseEvent) => void;
}

const CharacterCardDiv = styled.div<{ url: string }>`
    display: flex;
    justify-content: center;
    position: relative;
    width: 180px;
    height: 200px;
    margin: 30px;
    background: ${({ url }): string => `url("${url}")`};
    background-color: lightgray;
    background-size: cover;

    span {
        align-self: flex-end;
        font-size: 24px;
        color: white;
        margin-bottom: 24px;
    }
`;

export const CharacterItem: React.FC<(ICharacter | ISelectedCharacter) & IProps> = ({ image, title, cb, children }) => {
    return (
        <CharacterCardDiv url={image} onClick={cb}>
            <span>{title && title.toUpperCase()}</span>
            {children}
        </CharacterCardDiv>
    );
};
