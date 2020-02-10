import gql from 'graphql-tag';
import { ApolloCache } from 'apollo-cache';
// import * as GetCartItemTypes from './pages/__generated_/GetCartItems';
// import * as LaunchTileTypes from './pages/__generated__/LaunchTile';
import { Resolvers } from 'apollo-client';
import { GET_CART_ITEMS } from './queries';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }

    extend type Launch {
        isInCart: STRING!
    }

    extend type Mutation {
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
    Launch: {
        // isInCart: (launch: LaunchTileTypes.LaunchTile, _, { cache }): boolean => {
        // isInCart: (launch: {id: 1}, _, { cache }): boolean => {
        isInCart: (launch: {id: 1}, _, { cache }): any => {
            return 'hello'
            // const queryResult = cache.readQuery<GetCartItemTypes.GetCartItems>({
            const queryResult = cache.readQuery({
                query: GET_CART_ITEMS,
            });
            if (queryResult) {
                return true 
                // return queryResult.cartItems.includes(launch.id);
            }
            return false;
        },
    },
};
