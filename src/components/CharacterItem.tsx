import React from 'react';
import { ICharacter } from '../models';

export const CharacterItem: React.FC<ICharacter> = ({ name, id, image }) => {
    return (
        <div key={id}>
            <p>
                {id}-{name}
            </p>
            <img src={image} alt={name} width="220" height="220"></img>
        </div>
    );
};
