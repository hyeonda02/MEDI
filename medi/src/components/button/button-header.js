import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const HomeLoginButton = styled.button`
    width: 13.8rem;
    height: 4.4rem;
    background-color: ${(props) => props.backgroundColor || colors.mainBlue};
    border-radius: 0.8rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.textColor || colors.black};

    &:hover {
        color: ${colors.white};
    }
`;

const ButtonLogin = ({ buttonText, linkTo, backgroundColor, textColor }) => {
    return (
        <Link to={linkTo}>
            <HomeLoginButton backgroundColor={backgroundColor} textColor={textColor}>
                <p>{buttonText}</p>
            </HomeLoginButton>
        </Link>
    );
};

export default ButtonLogin;
