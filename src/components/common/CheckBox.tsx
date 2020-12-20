import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CheckBoxBlock = styled.div``;

interface IProps {
    checked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const CheckBox: React.FC<IProps> = ({ checked, handleChange, name }) => {
    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} name={name} color="primary" />}
            label={name}
        />
    );
};

export default React.memo(CheckBox);
