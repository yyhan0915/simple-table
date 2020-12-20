import { Button, FormGroup, makeStyles } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CheckedLanguageType } from 'src/model/type/CheckedLanguageType';
import { addComplain } from 'src/store/complain';
import styled from 'styled-components';
import Checkbox from '../common/CheckBox';
import ContentCell from '../common/ContentCell';
import IndexCell from '../common/IndexCell';
import SnackBar from '../common/SnackBar';
import InnerTable from '../innertable/InnerTable';
import Tab from '../innertable/Tab';
import TableRow from './TableRow';

const TableBlock = styled.form`
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

interface IProps {
    sample?: string;
}

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        width: '100px',
        height: '30px;',
        '&:hover': {
            backgroundColor: '#3498db',
        },
    },
    addButton: {
        backgroundColor: '#eaeaea',
        width: '70px',
        height: '25px;',
        '&:hover': {
            backgroundColor: '#eaeaea',
        },
    },
}));

const Table: React.FC<IProps> = () => {
    const [checkedState, setCheckedState] = useState<CheckedLanguageType[]>([
        { language: 'English', checked: true },
        { language: 'Korean', checked: true },
        { language: 'Hindi', checked: true },
        { language: 'Japanese', checked: false },
        { language: 'Chinese', checked: false },
    ]);
    const checkedLanguages: CheckedLanguageType[] = checkedState.filter(element => element.checked == true);
    const classes = useStyles();
    const [isSnackBarOpen, setIsSnackBarOpen] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');
    const impossibleCondition = checkedLanguages.length > 0;
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

    const onAddComplainFormHandler = useCallback(() => {
        dispatch(addComplain());
    }, []);

    const onSubmitHandler = () => {
        if (impossibleCondition) {
            setSnackBarMessage('Filling data is required');
            setIsSnackBarOpen(true);
            return;
        }
        setSnackBarMessage('Complain is submitted successfully');
        setIsSnackBarOpen(true);
    };

    return (
        <TableBlock onSubmit={onSubmitHandler}>
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
                    <Tab checkedLanguages={checkedLanguages} />
                    {complain.map(element => (
                        <InnerTable complainId={element.id} key={element.id} />
                    ))}
                    <div className="add-button-row">
                        <Button className={classes.addButton} variant="contained" onClick={onAddComplainFormHandler}>
                            Add+
                        </Button>
                    </div>
                    <div className="button-row">
                        <Button className={classes.button} variant="contained" type="submit">
                            Submit
                        </Button>
                    </div>
                </ContentCell>
            </TableRow>
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
