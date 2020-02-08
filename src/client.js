import React from 'react';
// import { render } from "react-dom";

import ApolloClient from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
});
