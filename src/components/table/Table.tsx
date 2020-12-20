import { Button, FormGroup } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../common/CheckBox';
import ContentCell from '../common/ContentCell';
import IndexCell from '../common/IndexCell';
import TableRow from './TableRow';
import Input from '../common/Input';

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
                <ContentCell hasColumn>
                    <div className="description">
                        <div className="title">description *</div>
                        <Input />
                    </div>
                    <div className="screenshot">
                        <div className="title">screenshot *</div>
                        <Input placeholder="(Max 30 words) Title of each screenshot" maxLength={30} />
                        <Input placeholder="(Max 300 words) Description of each screenshot" maxLength={300} />
                        <Input placeholder="Drag & drop image file here, or click to select file" />
                    </div>
                    <Button color="primary" variant="contained">
                        Add
                    </Button>
                </ContentCell>
            </TableRow>
        </TableBlock>
    );
};

export default Table;
