import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from 'src/store/complain';
import { complainState } from 'src/store/complain/selector';
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
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
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
    complainId: number;
}

const DragDrop: React.FC<IProps> = ({ title, onChange, complainId, ...props }) => {
    const dispatch = useDispatch();
    const onDrop = useCallback(acceptedFiles => {
        // Do somethings when drag & drop
        console.log(acceptedFiles);
        dispatch(changeField({ id: complainId, key: 'file', value: acceptedFiles[0].path }));
    }, []);
    const complain = useSelector(complainState);
    const relevantComplain = complain.find(element => element.id == complainId);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <DragDropBlock>
            <div className="dragdrop__title" onChange={onChange} {...props} {...getRootProps()}>
                <input {...getInputProps()} />
                {relevantComplain?.screenshot.file ? relevantComplain.screenshot.file : title}
            </div>
        </DragDropBlock>
    );
};

export default DragDrop;
