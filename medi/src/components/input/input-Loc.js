import { styled } from "styled-components";
import React,{ useState } from "react";
import colors from "../../styles/colors";

const LocInput = styled.input`
    width: 115rem;
    height: 6rem;
    background-color: #191B24;
    border-radius: 3rem;
    font-size: 2rem;
    font-weight: 800;
    color:${colors.white};
    border-color:${colors.white};
    padding-right: 20px; 
    text-indent: 30px;
`
const LocInputContainer = ({ type, placeholder }) => {

    const[inputValue, setInputValue]=useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <LocInput 
            type={type} 
            placeholder="지역을 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
        />
    );
};

export default LocInputContainer;
