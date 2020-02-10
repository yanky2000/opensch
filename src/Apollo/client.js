import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();
export const client = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql/',
    typeDefs,
    resolvers,
});
cache.writeData({
    data: {
        getTest: 'store is working',
        isLoggedIn: !!localStorage.getItem('token'),
        cartItems: [],
    },
});
