import { makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ContentCellBlock = styled.div`
    display: flex;
`;

interface IProps {
    sample?: string;
}

const ContentCell: React.FC<IProps> = ({ children }) => {
    return <ContentCellBlock>{children}</ContentCellBlock>;
};

export default ContentCell;
