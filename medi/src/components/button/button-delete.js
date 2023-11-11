// import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const HomeCalcButton = styled.button`
    width: 4.3vw;
    height: 1.5vw;
    background-color: ${colors.lightgray};
    border-radius: 3rem;
    border: none;
    //font-weight: 700;
    
    color : ${colors.silver};
    font-size : 0.8vw;

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

const DeleteCalc = ({ buttonText, onClick }) => {
    return (
        <HomeCalcButton onClick={onClick}>
            <p>{buttonText}</p>
        </HomeCalcButton>
    );
};

export default DeleteCalc