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
        character(id: 1) {
            id
        }
    }
`;

export const GET_TEST = gql`
    {
        getTest @client
        isInCart @client
    }
`;
export const GET_TEST2 = gql`
    {
        launch {
            isInCart @client
        }
    }
`;

export const GET_CART_ITEMS = gql`
    query GetCartItems {
        cartItems @client
    }
`;
