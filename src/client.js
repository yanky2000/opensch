import React from 'react';
// import { render } from "react-dom";

import ApolloClient from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
});

export function Names() {
    const { loading, error, data } = useQuery(gql`
        {
            characters(page: 2, filter: { name: "morty" }) {
                info {
                    count
                }
                results {
                    name
                    id
                    image
                }
            }
            character(id: 1) {
                id
            }
        }
    `);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.characters.results.map(({ image, name, id }) => (
        <div key={id}>
            <p>
                {id}-{name}
            </p>
            <img src={image} alt={name} width="220" height="220"></img>
        </div>
    ));
}
