import { Button, FormGroup } from '@material-ui/core';
import React, { useCallback, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addComplain } from 'src/store/complain';
import styled from 'styled-components';
import Checkbox from '../common/CheckBox';
import ContentCell from '../common/ContentCell';
import IndexCell from '../common/IndexCell';
import InnerTable from '../innertable/InnerTable';
import TableRow from './TableRow';

const TableBlock = styled.div`
    border: 1px solid black;
`;

interface IProps {
    sample?: string;
}

const Table: React.FC<IProps> = () => {
    const [checkedState, setCheckedState] = useState([
        { language: 'English', checked: true },
        { language: 'Korean', checked: true },
        { language: 'Hindi', checked: true },
        { language: 'Japanese', checked: false },
        { language: 'Chinese', checked: false },
    ]);
    const { complain } = useSelector((state: RootState) => state.complain, shallowEqual);
    const dispatch = useDispatch();

    const onLanguageSelectHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedState(prev => [
            ...prev.map(element => {
                if (element.language == event.target.name) {
                    element.checked = !element.checked!;
                    return element;
                }
                return element;
            }),
        ]);
    }, []);

    const onAddComplainFormHandler = () => {
        dispatch(addComplain());
    };

    return (
        <TableBlock>
            <TableRow>
                <IndexCell title="language *" />
                <ContentCell>
                    <FormGroup row>
                        {checkedState.map(element => (
                            <Checkbox
                                name={element.language}
                                checked={element.checked}
                                handleChange={onLanguageSelectHandler}
                                key={element.language}
                            />
                        ))}
                    </FormGroup>
                </ContentCell>
            </TableRow>
            <TableRow>
                <IndexCell title="contents *" />
                <ContentCell hasColumn>
                    {complain.map(element => (
                        <InnerTable complainId={element.id} />
                    ))}
                </ContentCell>
                <Button color="primary" variant="contained" onClick={onAddComplainFormHandler}>
                    Add
                </Button>
            </TableRow>
        </TableBlock>
    );
};

export default Table;
