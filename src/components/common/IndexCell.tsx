import React from 'react';
import styled from 'styled-components';

const IndexCellBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
`;

interface IProps {
    title: string;
}

const IndexCell: React.FC<IProps> = ({ title }) => {
    return <IndexCellBlock>{title}</IndexCellBlock>;
};

export default IndexCell;
