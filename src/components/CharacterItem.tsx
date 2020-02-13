import React from 'react';
import { ICharacter, ISelectedCharacter } from '../models';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DELETED, ADD_SELECTED } from 'Apollo/mutations';
import { getSlotPosition } from 'utils';

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
    background-size: cover;
`;
    // background: ${({ url }): string => `url("${url}")`};

//TODO: FIX
const CloseCross = styled.div`
    position: absolute;
    top: 8px;
    left: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export const CharacterItem: React.FC<ICharacter | ISelectedCharacter> = character => {
    const { id, name, image } = character;

    const [deleteCharacter, { data }] = useMutation(ADD_DELETED);
    const [selectCharacter, _] = useMutation(ADD_SELECTED);

    const deleteCard = e => {
        e.stopPropagation();
        deleteCharacter({ variables: { id } });
    };

    const selectCard = e => {
        const slotPosition = getSlotPosition(name);
        if (!slotPosition) return null;

        selectCharacter({ variables: { character, position: slotPosition } });
    };
    

    return (
        <div key={id}>
            <p>
                {id}-{name}
            </p>
            <CharacterCard url={image} onClick={selectCard}>
                <CloseCross onClick={deleteCard}>
                    <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="100" x2="100" y2="0" strokeWidth="14" stroke="black" />
                        <line x1="0" y1="0" x2="100" y2="100" strokeWidth="14" stroke="black" />
                    </svg>
                </CloseCross>
            </CharacterCard>
        </div>
    );
};
