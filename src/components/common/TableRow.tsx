import React from 'react';
import styled from 'styled-components';

const TableRowBlock = styled.div`
    width: 100%;
    display: flex;
`;

interface IProps {
    sample?: string;
}

const TableRow: React.FC<IProps> = ({ children }) => {
    return <TableRowBlock>{children}</TableRowBlock>;
};

export default TableRow;
