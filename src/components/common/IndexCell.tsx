import React from 'react';
import styled from 'styled-components';

const IndexCellBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    max-width: 200px;
    border-right: 1px solid grey;
    background-color: #eaeaea;

    @media (max-width: 768px) {
        min-width: 100%;
        max-width: 100%;
        border-right: none;
        border-bottom: 1px solid grey;
        height: 60px;
    }
`;

interface IProps {
    title: string;
}

const IndexCell: React.FC<IProps> = ({ title }) => {
    return <IndexCellBlock>{title}</IndexCellBlock>;
};

export default IndexCell;
