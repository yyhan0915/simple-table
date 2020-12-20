import Checkbox from './common/CheckBox';
import React from 'react';
import styled from 'styled-components';
import ContentCell from './common/ContentCell';
import IndexCell from './common/IndexCell';
import TableRow from './common/TableRow';

const TableBlock = styled.div``;

interface IProps {
    sample?: string;
}

const Table: React.FC<IProps> = () => {
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
