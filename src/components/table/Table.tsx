import Checkbox from '../common/CheckBox';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ContentCell from '../common/ContentCell';
import IndexCell from '../common/IndexCell';
import TableRow from './TableRow';
import { FormGroup } from '@material-ui/core';

const TableBlock = styled.div``;

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

    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
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
                                handleChange={onChangeHandler}
                            />
                        ))}
                    </FormGroup>
                </ContentCell>
            </TableRow>
            <TableRow>
                <IndexCell title="contents *" />
                <ContentCell>Sample Table</ContentCell>
            </TableRow>
        </TableBlock>
    );
};

export default Table;
