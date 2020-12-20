import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
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
        padding: 10px;
    }
`;

interface IProps {
    title: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DragDrop: React.FC<IProps> = ({ title, onChange, ...props }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <DragDropBlock>
            <div className="dragdrop__title" onChange={onChange} {...props} {...getRootProps()}>
                <input {...getInputProps()} />
                {title}
            </div>
        </DragDropBlock>
    );
};

export default DragDrop;
