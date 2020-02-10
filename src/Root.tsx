import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './Apollo/client';
import { Home } from './components/Home';

export const Root: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Home />
            </div>
        </ApolloProvider>
    );
};
