// dog.test.js
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
// The component AND the query need to be exported
import { CharactersList } from '../components/CharactersList';
import { GET_CHARACTERS, GET_ALL_DELETED_CHARACTERS } from 'Apollo/queries';

const mocks = [
    {
        request: {
            query: GET_CHARACTERS,
            variables: {
                name: 'Rick',
            },
        },
        result: {
            data: {
                characters: {
                    results: [
                        { id: '1', name: 'Rick', image: 'www.someurl.org/1' },
                        { id: '2', name: 'Jack rick', image: 'www.someurl.org/2' },
                    ],
                },
            },
        },
    },
];

// it('renders without error', () => {
//     renderer.create(
//         <MockedProvider mocks={mocks} addTypename={false}>
//             <Dog name="Buck" />
//         </MockedProvider>,
//     );
// });
it('should render dog', async () => {
    const charactersMock = {
        request: {
            query: GET_CHARACTERS,
            variables: { name: 'Rick' },
        },
        result: {
            data: {
                characters: {
                    results: [
                        { id: '1', name: 'Rick', image: 'www.someurl.org/1' },
                        { id: '2', name: 'Jack rick', image: 'www.someurl.org/2' },
                    ],
                },
            },
        },
    };
    const deletedIdsMock = {
        request: {
            query: GET_ALL_DELETED_CHARACTERS,
        },
        result: {
            data: {
                deleted: ['1'],
            },
        },
    };

    const component = render(
        <MockedProvider mocks={[charactersMock, deletedIdsMock]} addTypename={false}>
            <CharactersList searchString="Rick" />
        </MockedProvider>,
    );

    console.log(component);

    // await wait(0); // wait for response

    // const p = component.root.findByType('p');
    // expect(p.children).toContain('Buck is a poodle');
});
