import React from 'react';
import TextField from '@material-ui/core/TextField';
import throttle from 'lodash/throttle';
import { QUERY_MIN_CHAR_LENGTH, THROTTLE_DELAY_MS } from '../constants';

interface ISearchFormProps {
    // FIXME: change type
    cb: any;
}
export const SearchForm: React.FC<ISearchFormProps> = ({ cb }) => {
    const changeHandler = throttle(value => {
        if (value.length > QUERY_MIN_CHAR_LENGTH) {
            console.log(value);
            // cb(value);
        }
    }, THROTTLE_DELAY_MS);

    return (
        <TextField
            name="searchTerm"
            label="name"
            id="name"
            // defaultValue={values.title}
            onChange={({ target: { value } }): void => changeHandler(value)}
            // className={classes.textField}
            // helperText="Some important text"
            variant="outlined"
            required
        />
    );
};
