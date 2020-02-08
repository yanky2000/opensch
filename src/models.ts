export interface ICharacter {
    id: string;
    name: string;
    image: string;
}

export interface ICharacterData {
    characters: {
        results: ICharacter[];
    };
}

export interface ICharacterVars {
    id: string;
}
