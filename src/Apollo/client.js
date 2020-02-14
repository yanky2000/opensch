import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs } from './resolvers';
import { GET_ALL_SELECTED } from './queries';
import { CHARACTERS } from '../constants';

const cache = new InMemoryCache();
export const client = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql/',
    typeDefs,
    resolvers,
});
cache.writeData({
    data: {
        deleted: [],
    },
});

client.writeQuery({
    query: GET_ALL_SELECTED,
    data: { selected: { left: { id: 1, title: CHARACTERS.Rick }, right: { id: 2, title: CHARACTERS.Morty } } },
});
