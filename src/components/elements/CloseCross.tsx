import React from 'react';
import styled from 'styled-components';

const CloseCrossComponent = styled.div`
    position: absolute;
    top: 8px;
    left: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0.9;
`;

export const CloseCross: React.FC<{ cb: (e: React.MouseEvent) => void }> = ({ cb }) => {
    return (
        <CloseCrossComponent onClick={cb}>
            <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100" x2="100" y2="0" strokeWidth="14" stroke="black" />
                <line x1="0" y1="0" x2="100" y2="100" strokeWidth="14" stroke="black" />
            </svg>
        </CloseCrossComponent>
    );
};
