import { NextPage } from 'next';
import React from 'react';
import Table from '../components/Tables/Table';
import BasicLayoutIndex from '../layout/BasicLayout';

const IndexPage: NextPage = () => (
    <BasicLayoutIndex>
        <Table />
    </BasicLayoutIndex>
);

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default IndexPage;
