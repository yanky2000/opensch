import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import throttle from 'lodash/throttle';
import { QUERY_MIN_CHAR_LENGTH, THROTTLE_DELAY_MS } from '../constants';

interface ISearchFormProps {
    // FIXME: change type
    cb: any;
}
export const SearchForm: React.FC<ISearchFormProps> = ({ cb }) => {
    const throttledFetch = useCallback(
        throttle((value: string) => {
            cb(value);
        }, THROTTLE_DELAY_MS),
        [],
    );

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        if (value.length > QUERY_MIN_CHAR_LENGTH) {
            throttledFetch(value);
        }
    }

    return (
        <TextField
            name="searchTerm"
            label="name"
            id="name"
            // defaultValue={values.title}
            onChange={changeHandler}
            // className={classes.textField}
            // helperText="Some important text"
            variant="outlined"
            required
        />
    );
};
