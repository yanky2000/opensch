import { POSITIONS } from './constants';

export interface ICharacter {
    id: string;
    name: string;
    image: string;
}

export interface ISelectedCharacter extends ICharacter {
    position: string;
}

export interface ICharacterData {
    characters: {
        results: ICharacter[];
    };
}

export interface ICharacterVars {
    // id: string;
    name: string;
}
export interface ISelectedCharacterData {
    selected: ISelectedCharacter[];
}

export interface IDeletedCharacterData {
    selected: ISelectedCharacter[];
}

export type IAllSlotPositions = keyof typeof POSITIONS;
