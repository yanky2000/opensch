import React from 'react';
import { ICharacter } from '../models';
import styled from 'styled-components';
// import '../';

interface IProps {
    url: string;
}
interface ICharacterCardProps extends ICharacter {
    cb?: any;
}
// export const CharacterItem: React.FC<ICharacter & {cb: () => {}}> = ({ name, id, image, cb }) => {
const CharacterCard = styled.div<IProps>`
    /* display: flex; */
    position: relative;
    width: 180px;
    height: 200px;
    background: ${({ url }): string => `url("${url}")`};
    background-size: cover;
`;

const CloseCross = styled.div`
    position: absolute;
    top: 8px;
    /* top: var(-margin-default); */
    left: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export const CharacterItem: React.FC<ICharacterCardProps> = ({ name, id, image, cb }) => {
    const clickHandler = () => console.log(id);

    return (
        <div key={id}>
            <p>
                {id}-{name}
            </p>
            <CharacterCard url={image}>
                <CloseCross onClick={clickHandler}>
                    <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="100" x2="100" y2="0" strokeWidth="14" stroke="black" />
                        <line x1="0" y1="0" x2="100" y2="100" strokeWidth="14" stroke="black" />
                    </svg>
                </CloseCross>
            </CharacterCard>
        </div>
    );
};
