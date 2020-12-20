import { makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const IndexCellBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
`;

const useStyles = makeStyles(theme => ({
    sample: {},
}));

interface IProps {
    title: string;
}

const IndexCell: React.FC<IProps> = ({ title }) => {
    const classes = useStyles();

    return <IndexCellBlock>{title}</IndexCellBlock>;
};

export default IndexCell;
