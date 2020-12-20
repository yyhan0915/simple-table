import React from 'react';
import styled from 'styled-components';

const TableRowBlock = styled.div`
    width: 100%;
    display: flex;

    & + & {
        border-top: 1px solid grey;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

interface IProps {
    sample?: string;
}

const TableRow: React.FC<IProps> = ({ children }) => {
    return <TableRowBlock>{children}</TableRowBlock>;
};

export default TableRow;
