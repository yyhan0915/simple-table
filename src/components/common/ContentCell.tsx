import React from 'react';
import styled, { css } from 'styled-components';

const ContentCellBlock = styled.div<{ hasColumn?: boolean }>`
    display: flex;
    justify-content: center;
    padding: 10px;

    ${props =>
        props.hasColumn &&
        css`
            flex-direction: column;
        `}
`;

interface IProps {
    sample?: string;
    hasColumn?: boolean;
}

const ContentCell: React.FC<IProps> = ({ children, hasColumn }) => {
    return <ContentCellBlock hasColumn={hasColumn}>{children}</ContentCellBlock>;
};

export default ContentCell;
