import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from '../../i18n';
import { changeField } from '../../store/complain';
import Input from '../common/Input';
import DragDrop from '../DragDrop/DragDrop';

const InnerTableBlock = styled.div`
    padding: 10px;
    width: 100%;
    height: auto;
    background-color: grey;
    padding-bottom: 20px;

    & + & {
        border-top: 1px solid #969696;
    }

    .inner-table__title {
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
    const { t } = useTranslation();

    const onContentsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeField({ id: complainId, key: event.target.name, value: event.target.value }));
    };

    return (
        <InnerTableBlock>
            <div className="description">
                <div className="inner-table__title">description *</div>
                <Input
                    name="description"
                    placeholder={`${t('description')}`}
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.description}
                    required
                />
            </div>
            <div className="screenshot">
                <div className="inner-table__title">screenshot *</div>
                <Input
                    placeholder={`${t('title')}`}
                    maxLength={30}
                    name="title"
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.screenshot.title}
                    required
                />
                <Input
                    placeholder={`${t('desc')}`}
                    maxLength={300}
                    name="desc"
                    onChange={onContentsChangeHandler}
                    value={relevantComplain?.screenshot.desc}
                    required
                />
                <DragDrop title={`${t('dragAndDrop')}`} onChange={onContentsChangeHandler} complainId={complainId} />
            </div>
        </InnerTableBlock>
    );
};

export default InnerTable;
