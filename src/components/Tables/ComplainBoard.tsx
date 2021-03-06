import { Button, makeStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CheckedLanguageType } from 'src/model/type/CheckedLanguageType';
import { addComplain } from 'src/store/complain';
import { complainState } from 'src/store/complain/selector';
import styled from 'styled-components';
import ContentCell from '../common/Cell/ContentCell';
import IndexCell from '../common/Cell/IndexCell';
import InnerTable from '../InnerTables/InnerTable';
import Tab from '../InnerTables/Tab';
import TableRow from './TableRow';

const ComplainBoardBlock = styled(TableRow)``;

interface IProps {
    checkedLanguages: CheckedLanguageType[];
}

const useStyles = makeStyles(() => ({
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

const ComplainBoard: React.FC<IProps> = ({ checkedLanguages }) => {
    const classes = useStyles();
    const complain = useSelector(complainState, shallowEqual);
    const dispatch = useDispatch();

    const onAddComplainFormHandler = useCallback(() => {
        dispatch(addComplain());
    }, []);

    return (
        <ComplainBoardBlock>
            <IndexCell title="contents *" />
            <ContentCell hasColumn>
                <Tab checkedLanguages={checkedLanguages} />
                {complain.map((element, index) => (
                    <InnerTable key={index} complain={element} />
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
        </ComplainBoardBlock>
    );
};

export default ComplainBoard;
