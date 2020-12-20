import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { CheckedLanguageType } from 'src/model/type/CheckedLanguageType';
import styled from 'styled-components';

const TabBlock = styled.div`
    display: flex;
`;

const useStyles = makeStyles(theme => ({
    sample: {},
}));

interface IProps {
    sample?: string;
    checkedLanguages: CheckedLanguageType[];
}

const Tab: React.FC<IProps> = ({ checkedLanguages }) => {
    const classes = useStyles();

    return (
        <TabBlock>
            {checkedLanguages.map(element => (
                <Button>{element.language}</Button>
            ))}
        </TabBlock>
    );
};

export default Tab;
