import React from 'react';
import { ICharacter } from '../models';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DELETED } from 'Apollo/mutations';
import { GET_SELECTED_CHARACTERS } from 'Apollo/queries';
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
    background: ${({ url }): string => `url("${url}")`};
    background-size: cover;
`;

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

// export const CharacterItem: React.FC<ICharacterCardProps> = ({ name, id, image, cb }) => {
export const CharacterItem: React.FC<ICharacter> = character => {
    const { id, name, image } = character;

    const [deleteCharacter, { data }] = useMutation(ADD_DELETED);

    // const [selectCharacter, { data }] = useMutation(GET_SELECTED_CHARACTERS);
    const [selectCharacter, _] = useMutation(GET_SELECTED_CHARACTERS);

    const clickHandler = e => {
        // e.stopPropagation()
        deleteCharacter({ variables: { id } });
        console.log(id);
    };
    const handler = e => {
        const slotPosition = getSlotPosition(name);
        if (!slotPosition) return null;

        selectCharacter({ variables: { position: slotPosition, character } });
        console.log('selected', id, slotPosition);
    };
    return (
        <div key={id}>
            <p>
                {id}-{name}
            </p>
            <CharacterCard url={image} onClick={handler}>
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
