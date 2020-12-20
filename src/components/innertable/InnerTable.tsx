import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../store/complain';
import styled from 'styled-components';
import Input from '../common/Input';

const InnerTableBlock = styled.div`
    padding: 10px;
    width: 100%;
    height: auto;
    background-color: grey;
    padding-bottom: 20px;

    & + & {
        border-top: 1px solid #969696;
    }

    .title {
        margin-bottom: 10px;
        margin-top: 10px;
        color: white;
    }
`;

interface IProps {
    sample?: string;
    complainId: number;
}

const InnerTable: React.FC<IProps> = ({ complainId }) => {
    const dispatch = useDispatch();
    const { complain } = useSelector((state: RootState) => state.complain, shallowEqual);
    const relevantComplain = complain.find(element => element.id == complainId);

    const onContentsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeField({ id: complainId, key: event.target.name, value: event.target.value }));
    };

    return (
        <InnerTableBlock>
            <div className="description">
                <div className="title">description *</div>
                <Input
                    name="description"
                    placeholder="(Max 250 words) Game description at the top of the game details page"
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.description}
                    required
                />
            </div>
            <div className="screenshot">
                <div className="title">screenshot *</div>
                <Input
                    placeholder="(Max 30 words) Title of each screenshot"
                    maxLength={30}
                    name="title"
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.screenshot.title}
                    required
                />
                <Input
                    placeholder="(Max 300 words) Description of each screenshot"
                    maxLength={300}
                    name="desc"
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.screenshot.desc}
                    required
                />
                <Input
                    placeholder="Drag & drop image file here, or click to select file"
                    name="file"
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.screenshot.file}
                    required
                />
            </div>
        </InnerTableBlock>
    );
};

export default InnerTable;
