import { FormGroup } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ContentCell from '../common/Cell/ContentCell';
import IndexCell from '../common/Cell/IndexCell';
import CheckBox from '../common/CheckBox';
import TableRow from './TableRow';

const SelectLanguageBlock = styled(TableRow)``;

interface IProps {
    checkedState: any[];
    onLanguageSelectHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectLanguage: React.FC<IProps> = ({ checkedState, onLanguageSelectHandler }) => {
    return (
        <SelectLanguageBlock>
            <IndexCell title="language *" />
            <ContentCell>
                <FormGroup row>
                    {checkedState.map(element => (
                        <CheckBox
                            name={element.language}
                            checked={element.checked}
                            handleChange={onLanguageSelectHandler}
                            key={element.language}
                        />
                    ))}
                </FormGroup>
            </ContentCell>
        </SelectLanguageBlock>
    );
};

export default React.memo(SelectLanguage);
