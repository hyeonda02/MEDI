import { styled } from "styled-components";
import colors from "../../styles/colors";

const CalcInput = styled.input`
    width: 50%;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 0.5vw;
    outline: none;
    box-sizing: border-box;
    padding: 1.5vw;
    color: ${colors.black};

`

const CalcInputContainer = ({ type, placeholder }) => {
    return <CalcInput type={type} placeholder={placeholder}/>;
};

export default CalcInputContainer;