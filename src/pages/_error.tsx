import { NextPage } from 'next';
import React from 'react';

const ErrorPage: NextPage = () => {
    return <div>Whoops, something went wrong</div>;
};

ErrorPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default ErrorPage;
