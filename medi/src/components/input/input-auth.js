import React from 'react';
import styled from 'styled-components';
import colors from "../../styles/colors";
import showImg from "../../assets/images/show.png";
import noShowImg from "../../assets/images/no-show.png";

const Errordiv = styled.div`
    position: absolute;
    margin-top: -2vw;
`;

const SignError = styled.p`
    font-size: 0.8vw;
`;

const SignInput = styled.input`
    width: 100%;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 0.5vw;
    outline: none;
    font-size: 1vw;
    box-sizing: border-box;
    padding: 2vw;
    color: ${colors.white};
    align-items: center;
    margin-bottom: 1.5vw;
    margin-top: -0.5vw;
`;

const ShowDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 2vw;
    margin-top: -4.2vw;
`;

const Input = ({ show, toggleShow, isInput, input, handleInputChange, placeholder, inputError, inputSuccess, showInputError }) => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <SignInput type={show ? "text" : "password"} placeholder={placeholder} value={input} onChange={handleInputChange} />
                {show !== "text" && (
                    <ShowDiv onClick={toggleShow}>
                        {show ? (
                            <img src={showImg} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
                        ) : (
                            <img src={noShowImg} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
                        )}
                    </ShowDiv>
                )}
            </div>
            {showInputError && (
                <Errordiv>
                    <SignError style={{ color: (isInput) ? colors.green : colors.red }}>
                        {(isInput) ? inputSuccess : inputError}
                    </SignError>
                </Errordiv>
            )}

        </div>
    );
};

export default Input;
