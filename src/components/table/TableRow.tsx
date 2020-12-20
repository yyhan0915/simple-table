import React from 'react';
import styled, { css } from 'styled-components';

const TableRowBlock = styled.div<{ hasColumn?: boolean }>`
    width: 100%;
    display: flex;

    & + & {
        border-top: 1px solid grey;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

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

const TableRow: React.FC<IProps> = ({ children, hasColumn }) => {
    return <TableRowBlock hasColumn={hasColumn}>{children}</TableRowBlock>;
};

export default TableRow;
