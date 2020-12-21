import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CheckedLanguageType } from '../../model/type/CheckedLanguageType';
import SnackBar from '../common/SnackBar';
import ComplainBoard from './ComplainBoard';
import SelectLanguage from './SelectLanguage';

const TableBlock = styled.form`
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
`;

const Table: React.FC = () => {
    const [checkedState, setCheckedState] = useState<CheckedLanguageType[]>([
        { language: 'English', checked: true },
        { language: 'Korean', checked: true },
        { language: 'Hindi', checked: true },
        { language: 'Japanese', checked: false },
        { language: 'Chinese', checked: false },
    ]);
    const checkedLanguages: CheckedLanguageType[] = checkedState.filter(element => element.checked == true);
    const [isSnackBarOpen, setIsSnackBarOpen] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');
    const impossibleSubmitCondition = checkedLanguages.length > 0; // we can add impossible condition via this variable

    const onLanguageSelectHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedState(prev => [
            ...prev.map(element => {
                if (event.target.name == 'English') {
                    element.checked == true;
                    return element;
                }
                if (element.language == event.target.name) {
                    element.checked = !element.checked!;
                    return element;
                }
                return element;
            }),
        ]);
    }, []);

    const onSubmitHandler = useCallback((event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        if (!impossibleSubmitCondition) {
            setSnackBarMessage('Filling data is required');
            setIsSnackBarOpen(true);
            return;
        }
        setSnackBarMessage('Complain is submitted successfully');
        setIsSnackBarOpen(true);
    }, []);

    return (
        <TableBlock onSubmit={onSubmitHandler}>
            <SelectLanguage checkedState={checkedState} onLanguageSelectHandler={onLanguageSelectHandler} />
            <ComplainBoard checkedLanguages={checkedLanguages} />
            <SnackBar
                isOpen={isSnackBarOpen}
                message={snackBarMessage}
                handle={() => {
                    setIsSnackBarOpen(false);
                }}
            />
        </TableBlock>
    );
};

export default Table;
