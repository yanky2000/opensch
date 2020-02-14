import { SearchForm } from '../components/SearchForm';
import React from 'react';
import { render } from '@testing-library/react';
import { TEST_IDS } from '../constants';

test('renders input form', () => {
    const cb = jest.fn(val => console.log(val));

    const { getByTestId } = render(<SearchForm cb={cb} />);
    const inputForm = getByTestId(TEST_IDS.searchForm);
    expect(inputForm).toBeInTheDocument();
});
