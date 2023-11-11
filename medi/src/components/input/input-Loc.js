import { styled } from "styled-components";
import React,{ useState } from "react";
import colors from "../../styles/colors";

const LocInput = styled.input`
    width: 60vw;
    height: 4vw;
    background-color: #191B24;
    border-radius: 3vw;
    font-size: 2rem;
    font-weight: 800;
    margin-right: 1.5vw;
    color:${colors.white};
    border-color:${colors.white};
    text-indent: 2vw;
`

const LocInputContainer = ({ type, value, placeholder, onInputChange }) => {
    return (
        <LocInput
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => onInputChange(e.target.value)}
        />
    );
};


export default LocInputContainer;