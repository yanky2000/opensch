import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
    {
        characters(page: 2, filter: { name: "morty" }) {
            info {
                count
            }
            results {
                name
                id
                image
            }
        }
        character(id: 1) {
            id
        }
    }
`;
