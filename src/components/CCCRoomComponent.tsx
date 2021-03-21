import React from 'react';
import styled, { css, keyframes } from 'styled-components';

function CCCRoomComponent() {
    return (
        <CCCRoom>
            <LP>
                <LPFront>
                    <LPHole/>
                </LPFront>
                <LPBack>
                    <LPHole/>
                </LPBack>
            </LP>
        </CCCRoom>
    )
}

const CCCRoom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    perspective: 1000px;
`;

const LPRotate = keyframes`
    from {
        transform: rotateX(45deg) rotateZ(0deg);
    } to {
        transform: rotateX(45deg) rotatez(360deg);
    }
`;

const LP = styled.div`
    position: relative;

    width: 300px;
    height: 300px;

    transform: rotateX(45deg) rotateZ(45deg);
    transform-style: preserve-3d;

    ${css`animation: ${LPRotate} 1s infinite linear`}
`;

const LPFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background: linear-gradient(70deg, blue, pink);
    /* background-color: rgb(255,255,255); */

    transform: translateZ(10px);
    transform-style: preserve-3d;
`;

const LPBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background-color: rgb(255,255,255);
    transform-style: preserve-3d;
`;

const LPHole = styled.div`
    width: 10px;
    height: 10px;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background-color: transparent;
`;

export default CCCRoomComponent;