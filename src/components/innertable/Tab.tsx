import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { CheckedLanguageType } from 'src/model/type/CheckedLanguageType';
import styled from 'styled-components';

const TabBlock = styled.div`
    display: flex;
`;

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: '#eaeaea',
    },
    selected: {
        backgroundColor: '#3498db',
        color: 'white',

        '&:hover': {
            backgroundColor: '#3498db',
            color: 'white',
        },
    },
}));

interface IProps {
    checkedLanguages: CheckedLanguageType[];
}

const Tab: React.FC<IProps> = ({ checkedLanguages }) => {
    const classes = useStyles();
    const [selected, setSelected] = useState<boolean[]>(new Array(5).fill(false));

    const onSelectHandler = (index: number) => {
        setSelected([
            ...selected.map((_, selectedArrIndex) => {
                if (selectedArrIndex == index) {
                    return true;
                }
                return false;
            }),
        ]);
    };

    return (
        <TabBlock>
            {checkedLanguages.map((element, index) =>
                selected[index] ? (
                    <Button
                        className={classes.selected}
                        key={index + element.language + element.checked}
                        onClick={() => {
                            onSelectHandler(index);
                        }}
                    >
                        {element.language}
                    </Button>
                ) : (
                    <Button
                        className={classes.button}
                        key={index + element.language + element.checked}
                        onClick={() => {
                            onSelectHandler(index);
                        }}
                    >
                        {element.language}
                    </Button>
                ),
            )}
        </TabBlock>
    );
};

export default Tab;
