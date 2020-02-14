import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
    query getCharacterList($name: String!) {
        characters(page: 2, filter: { name: $name }) {
            info {
                count
            }
            results {
                name
                id
                image
            }
        }
    }
`;

export const GET_ALL_DELETED_CHARACTERS = gql`
    query GetAllDeleted {
        deleted @client
    }
`;

export const GET_ALL_SELECTED = gql`
    query GetAllSelected {
        selected @client
    }
`;
