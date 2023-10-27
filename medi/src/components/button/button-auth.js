import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const ButtonAuth = styled.button`
    width: 100%;
    height: 6.5rem;
    background-color: ${colors.mainBlue};
    border: none;
    border-radius: 0.5vw;
    font-size: 2.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    font-weight: bold;
    color: ${colors.black};
    margin-top: 3vw;

    &:hover {
        color: ${colors.white};
    }
`

const AuthButton = ({ buttonText, linkTo, type }) => {
    return (
        <Link to={linkTo}>
            <ButtonAuth type={type}>
                <p>{buttonText}</p>
            </ButtonAuth>
        </Link>
    )
}

export default AuthButton