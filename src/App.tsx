import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Names, client } from './client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Names />
            </div>
        </ApolloProvider>
    );
};

export default App;
