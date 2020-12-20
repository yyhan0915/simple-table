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

    .button-row {
        display: flex;
        justify-content: flex-end;
    }

    .add-button-row {
        background-color: grey;
        display: flex;
        justify-content: flex-end;
        padding-right: 5px;
        height: 40px;
        align-items: center;
        margin-bottom: 10px;
    }
`;

interface IProps {
    sample?: string;
    hasColumn?: boolean;
}

const ContentCell: React.FC<IProps> = ({ children, hasColumn }) => {
    return <ContentCellBlock hasColumn={hasColumn}>{children}</ContentCellBlock>;
};

export default ContentCell;
