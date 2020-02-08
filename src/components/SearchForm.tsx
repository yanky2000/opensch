import React from 'react';
import TextField from '@material-ui/core/TextField';

export const SearchForm: React.FC = () => {
    return (
        <TextField
            name="name"
            label="name"
            id="name"
            // defaultValue={values.title}
            // onChange={changeHandler}
            // className={classes.textField}
            // helperText="Some important text"
            variant="outlined"
            required
        />
    );
};
