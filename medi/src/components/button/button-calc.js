// import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const HomeCalcButton = styled.button`
    width: 1.5vw;
    height: 1.5vw;
    background-color: ${colors.lightgray};
    border-radius: 3rem;
    border: none;
    //font-weight: 700;
    
    color : ${colors.silver};
    font-size : 2vw;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align : center;

    // margin: 5%;
    // margin-top: 5%;

    &:hover {
        color: ${colors.gray};
    }
`

const CalcButton = ({ buttonText, onClick }) => {
    return (
        <HomeCalcButton onClick={onClick}>
            <p>{buttonText}</p>
        </HomeCalcButton>
    );
};

export default CalcButton