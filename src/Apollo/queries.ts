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

export const GET_ALL_CHARACTERS = gql`
    query GetAllCharacters {
        characters {
            results {
                name
                id
                image
            }
        }
    }
`;

export const GET_DELETED_CHARACTERS = gql`
    {
        deletedCharacterIds
    }
`;
export const GET_ALL_SELECTED = gql`
    query GetAllSelected {
        selected @client
    }
`;
// export const GET_ONE_SELECTED = gql`
//     query GetOneSelected($characterId: String!) {
//         selected(id: $characterId) @client
//     }
// `;
// export const GET_SELECTED_CHARACTERS = gql`
//     {
//         selectedHeroes @client {
//             name
//             position
//         }
//     }
// `;
// export const GET_TEST = gql`
//     {
//         getTest @client
//     }
// `;
// export const GET_TEST2 = gql`
//     {
//         launch {
//             isInCart @client
//         }
//     }
// `;

// export const GET_CART_ITEMS = gql`
//     query GetCartItems {
//         cartItems @client
//     }
// `;
