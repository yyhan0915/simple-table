import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CheckBoxBlock = styled.div``;

const useStyles = makeStyles(theme => ({
    sample: {},
}));

interface IProps {
    checked: boolean;
    handleChange: () => void;
    name: string;
}

const CheckBox: React.FC<IProps> = ({ checked, handleChange, name }) => {
    const classes = useStyles();

    return (
        <CheckBoxBlock>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name={name} color="primary" />}
                label={name}
            />
        </CheckBoxBlock>
    );
};

export default CheckBox;
