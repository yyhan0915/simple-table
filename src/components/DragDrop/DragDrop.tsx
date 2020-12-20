import React from 'react';
import styled from 'styled-components';

const DragDropBlock = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid grey;

    .dragdrop__title {
        font-size: 1rem;
        color: grey;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

interface IProps {
    title: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DragDrop: React.FC<IProps> = ({ title, onChange, ...props }) => {
    return (
        <DragDropBlock>
            <div className="dragdrop__title" onChange={onChange} {...props}>
                {title}
            </div>
        </DragDropBlock>
    );
};

export default DragDrop;
