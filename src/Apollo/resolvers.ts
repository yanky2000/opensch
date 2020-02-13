import gql from 'graphql-tag';
import { ApolloCache } from 'apollo-cache';
// import * as GetCartItemTypes from './pages/__generated_/GetCartItems';
// import * as LaunchTileTypes from './pages/__generated__/LaunchTile';
import { Resolvers } from 'apollo-client';
import {
    GET_DELETED_CHARACTERS,
    // _SELECTED_CHARACTERS,
    GET_ALL_SELECTED,
    GET_CHARACTERS,
    GET_ALL_CHARACTERS,
} from './queries';
import { client } from './client';

export const typeDefs = gql`
    type Character {
        name: String!
        id: ID!
        image: String!
    }

    extend type Query {
        getOneSelected: String!
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }

    extend type Launch {
        isInCart: String!
    }

    extend type Mutation {
        addDeleted(id: ID!): null
        addOrRemoveFromCart(id: ID!): [ID!]!
    }
`;

type ResolverFn = (parent: any, args: any, { cache }: { cache: ApolloCache<any> }) => any;

interface ResolverMap {
    [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
    Launch: ResolverMap;
    // We will update this with our app's resolvers later
}

export const resolvers = {
    Query: {
        getOneSelected: (_root, { id }, { cache, getCacheKey }) => {
            // const queryResult = cache.readQuery<GetCartItemTypes.GetCartItems>({ // const queryResult = cache.readQuery({
            //     query: GET_CART_ITEMS,
            // });
            // if (queryResult) {
            //     // return true;
            //     return queryResult.cartItems.includes(launch.id);
            // }
            // return null;
        },
    },
    Mutation: {
        addSelected: (_root, { character, position }, { cache, getCacheKey }) => {
            const query = client.readQuery({ query: GET_ALL_SELECTED });
            client.writeQuery({
                query: GET_ALL_SELECTED,
                data: { selected: { ...query.selected, [position]: character } },
            });
            return null;
        },

        addDeleted: (_root, { id }, { cache, getCacheKey }) => {
            // console.log('root', _root);
            // console.log('vars', id);
            // console.log('cache', cache);
            // const id = getCacheKey({ __typename: 'TodoItem', id: variables.id })

            // const fragment = gql`
            //   fragment completeTodo on TodoItem {
            //     completed
            //   }
            // `;
            // const todo = cache.readFragment({ fragment, id });
            // const data = { ...todo, completed: !todo.completed };
            // const allHeroes = client.readQuery({ query: GET_ALL_CHARACTERS });
            // allHeroes.map(hero => hero.id !== id);
            // console.log(34, allHeroes);

            // client.writeQuery({
            //     query: GET_CHARACTERS,
            //     data: {

            //         characters: {
            //             results: allHeroes
            //         },
            //         // ...allHeroes.

            //     },
            // });

            const data = client.readQuery({ query: GET_DELETED_CHARACTERS });

            const deleted = new Set(data.deletedCharacterIds);
            deleted.add(id);

            client.writeQuery({
                query: GET_DELETED_CHARACTERS,
                data: {
                    deletedCharacterIds: Array.from(deleted),
                    // deletedCharacterIds: [...data.deletedCharacterIds, id],
                },
            });
            return null;
        },
        // isInCart: (launch: LaunchTileTypes.LaunchTile, _, { cache }): boolean => {
        // isInCart: (launch: {id: 1}, _, { cache }): boolean => {
        // isInCart: (launch: { id: 1 }, _, { cache }): any => {
        //     return 'hello';
        //     // const queryResult = cache.readQuery<GetCartItemTypes.GetCartItems>({
        //     const queryResult = cache.readQuery({
        //         query: GET_CART_ITEMS,
        //     });
        //     if (queryResult) {
        //         return true;
        //         // return queryResult.cartItems.includes(launch.id);
        //     }
        //     return false;
        // },
    },
};
