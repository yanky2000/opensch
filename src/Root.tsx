import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './Apollo/client';
import { Home } from './components/Home';
import styled from 'styled-components';

const RootDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const Root: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <RootDiv>
                <Home />
            </RootDiv>
        </ApolloProvider>
    );
};
