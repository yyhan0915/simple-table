import { Button } from '@material-ui/core';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const IndexPage: NextPage = () => (
    <>
        <h1>Hello Next.js </h1>
        <p>
            <Link href="/about">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Link>
        </p>
        <Button variant="contained" color="secondary">
            Primary
        </Button>
    </>
);

export default IndexPage;
