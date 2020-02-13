import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs } from './resolvers';
import { GET_ALL_SELECTED } from './queries';

const cache = new InMemoryCache();
export const client = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql/',
    typeDefs,
    resolvers,
});
cache.writeData({
    data: {
        // getTest: 'store is working',
        // isLoggedIn: !!localStorage.getItem('token'),
        // cartItems: [],
        deletedCharacterIds: [],
        // sel: {
        //     left: 'left',
        //     right: 'right',
        //     __typename: 'Position',
        // },
        // selectedHeroes: [
        //     {
        //         position: '',
        //         id: '',
        //         name: 'right pos',
        //         image: '',
        //         __typename: 'Hero',
        //     },
        //     {
        //         position: '',
        //         id: '',
        //         name: 'left pos',
        //         image: '',
        //         __typename: 'Hero',
        //     },
        // ],
    },
});

client.writeQuery({
    query: GET_ALL_SELECTED,
    data: { selected: { left: { id: 'someId1' }, right: { id: 'someId2' } } },
});
