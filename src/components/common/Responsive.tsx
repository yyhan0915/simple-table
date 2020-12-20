import React from 'react';
import styled from 'styled-components';

interface ResponsiveProps {
    children?: unknown;
}

const ResponsiveBlock = styled.div`
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    max-width: 768px;
    background: white;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Responsive: React.FC<ResponsiveProps> = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
