import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const HomeCalcButton = styled.button`
    width: 4.4rem;
    height: 4.4rem;
    background-color: ${colors.white};
    border-radius: 3rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    
    color : ${colors.silver};
    font-size : 3rem;

    align-items: center;
    justify-content: center;
    text-align : center;

    &:hover {
        color: ${colors.gray};
    }
`

const ButtonCalc = ({ buttonText, linkTo }) => {
    return (
        <Link to={linkTo}>
            <HomeCalcButton>
                <p>{buttonText}</p>
            </HomeCalcButton>
        </Link>
    )
}

export default ButtonCalc