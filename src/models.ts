import { POSITIONS } from './constants';

export type IId = string;
export interface ICharacter {
    id: IId;
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
    name: string;
}
export interface ISelectedCharacterData {
    selected: ISelectedCharacter[];
}

export interface IDeletedCharacterData {
    deleted: IId[];
}

export type IAllSlotPositions = keyof typeof POSITIONS;
