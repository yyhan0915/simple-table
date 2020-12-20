import React from 'react';
import styled from 'styled-components';

const IndexCellBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    border: 1px solid black;
    background-color: #eaeaea;
`;

interface IProps {
    title: string;
}

const IndexCell: React.FC<IProps> = ({ title }) => {
    return <IndexCellBlock>{title}</IndexCellBlock>;
};

export default IndexCell;
