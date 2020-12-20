import { makeStyles, TextField } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    textType: {
        height: '40px',
        borderRadius: 0,
        width: '100%',
    },
    root: {
        borderRadius: 0,
        height: '40px',
        padding: 0,
        backgroundColor: '#FFFFFF',
        '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
        },
    },
    focused: {
        borderWidth: '1px',
        borderColor: `${theme.palette.primary.main} !important`,
    },
    resize: {
        fontSize: '14px',
        padding: '10px 14px',
    },
}));

interface InputProps {
    autoComplete?: string;
    placeholder?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: any;
    defaultValue?: any;
    value?: any;
    type?: string;
    required?: boolean;
    style?: CSSProperties;
    coverStyle?: CSSProperties;
    timer?: number;
    setTimer?: React.Dispatch<React.SetStateAction<number>>;
    maxLength?: number;
    className?: string;
    inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    disabled?: boolean;
    id?: any;
}

const Input: React.FC<InputProps> = ({
    autoComplete,
    type = 'text',
    disabled = false,
    value,
    onChange,
    onKeyPress,
    placeholder = '',
    name,
    required = false,
    style,
    maxLength,
    inputMode,
    id,
}) => {
    const classes = useStyles();

    return (
        <TextField
            autoComplete={autoComplete}
            variant="outlined"
            InputProps={{
                classes: {
                    root: classes.root,
                    focused: classes.focused,
                    input: classes.resize,
                },
            }}
            onChange={onChange}
            placeholder={placeholder}
            className={classes.textType}
            name={name}
            value={value}
            type={type}
            required={required}
            onKeyPress={onKeyPress}
            style={style}
            inputProps={{ maxLength, inputMode }}
            disabled={disabled}
            id={id}
        />
    );
};

export default React.memo(Input);
