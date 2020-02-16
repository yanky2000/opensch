import gql from 'graphql-tag';
import { ApolloCache } from 'apollo-cache';
import { Resolvers } from 'apollo-client';
import { GET_ALL_DELETED_CHARACTERS, GET_ALL_SELECTED } from './queries';
import { client } from './client';

export const typeDefs = gql`
    type Character {
        name: String!
        id: ID!
        image: String!
    }
    extend type Query {
        selected: [String!]
        deleted: [String!]
    }

    extend type Mutation {
        addDeleted(id: ID!): null
        addSelected(character: Character!, position: String!): null
    }
`;

type ResolverFn = (parent: any, args: any, { cache }: { cache: ApolloCache<any> }) => any;

interface IResolverMap {
    [field: string]: ResolverFn;
}

interface IAppResolvers extends Resolvers {
    Mutation: IResolverMap;
}

export const resolvers: IAppResolvers = {
    Mutation: {
        addSelected: (_root, { character, position }): null => {
            const query = client.readQuery({ query: GET_ALL_SELECTED });
            client.writeQuery({
                query: GET_ALL_SELECTED,
                data: { selected: { ...query.selected, [position]: character } },
            });
            return null;
        },

        addDeleted: (_root, { id }): null => {
            const data = client.readQuery({ query: GET_ALL_DELETED_CHARACTERS });

            const deleted = new Set(data.deleted);
            deleted.add(id);

            client.writeQuery({
                query: GET_ALL_DELETED_CHARACTERS,
                data: {
                    deleted: Array.from(deleted),
                },
            });
            return null;
        },
    },
};
