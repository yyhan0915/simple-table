import { Checkbox, makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ContentCell from './common/ContentCell';
import IndexCell from './common/IndexCell';
import TableRow from './common/TableRow';

const TableBlock = styled.div``;

const useStyles = makeStyles(theme => ({
    sample: {},
}));

interface IProps {
    sample?: string;
}

const Table: React.FC<IProps> = () => {
    const classes = useStyles();

    return (
        <TableBlock>
            <TableRow>
                <IndexCell title="language *" />
                <ContentCell>
                    <Checkbox name="English" />
                    <Checkbox name="Korean" />
                    <Checkbox name="Japanese" />
                    <Checkbox name="Chinese" />
                    <Checkbox name="Hindi" />
                </ContentCell>
            </TableRow>
            <TableRow>
                <IndexCell title="contents *" />
                <ContentCell></ContentCell>
            </TableRow>
        </TableBlock>
    );
};

export default Table;
