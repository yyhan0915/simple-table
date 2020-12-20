import { NextPage } from 'next';
import React from 'react';
import Table from '../components/table/Table';
import BasicLayoutIndex from '../layout/BasicLayout';

const IndexPage: NextPage = () => (
    <BasicLayoutIndex>
        <Table />
    </BasicLayoutIndex>
);

export default IndexPage;
