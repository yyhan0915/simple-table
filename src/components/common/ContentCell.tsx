import { makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ContentCellBlock = styled.div`
    display: flex;
`;

const useStyles = makeStyles(theme => ({
    sample: {},
}));

interface IProps {
    sample?: string;
}

const ContentCell: React.FC<IProps> = ({ children }) => {
    const classes = useStyles();

    return <ContentCellBlock>{children}</ContentCellBlock>;
};

export default ContentCell;
