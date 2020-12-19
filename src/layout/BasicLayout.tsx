/**
 * @title Layout props
 * @param  backgroundColor : 화면의 배경색상을 정할 수 있다,
 * @param title : 문서의 제목을 정할 수 있다. SEO
 */

import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

interface BasicLayoutIndexProps {
    backgroundColor?: string;
    title?: string;
}

const BasicLayoutIndexBlock = styled.div<BasicLayoutIndexProps>`
    background: ${props => props.backgroundColor || '#FFF'};
    width: 100%;
    min-height: 100vh;
`;

const BasicLayoutIndex: React.FC<BasicLayoutIndexProps> = ({
    children,
    backgroundColor,
    title = 'Web Application',
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Responsive>
                <BasicLayoutIndexBlock backgroundColor={backgroundColor}>{children}</BasicLayoutIndexBlock>
            </Responsive>
        </>
    );
};

export default BasicLayoutIndex;
