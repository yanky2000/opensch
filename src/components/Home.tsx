import React from 'react';
import { SearchForm } from './SearchForm';
import { CharacterSlot } from './CharacterSlot';
import { MORTY, RICK } from '../constants';

export const Home: React.FC = () => {
    const c = {
        name: '',
        id: '',
        image: '',
    };
    const targetCharacters = [MORTY, RICK];

    const renderSlots = () => {
        return targetCharacters.map(name => <CharacterSlot key={name} name={name} />);
    };

    return (
        <>
            <SearchForm />
            {renderSlots()}
            {/* <CharacterSlot
                {...c}
                // name="hel"
                //  character = {name: '', id: ''}
            /> */}
        </>
    );
};
