import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";

const HomeLoginButton = styled.button`
    width: 13.8rem;
    height: 4.4rem;
    background-color: ${(props) => props.btnbgcolor || colors.mainBlue};
    border-radius: 0.8rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.txtcolor || colors.black};

    &:hover {
        color: ${colors.white};
    }
`;

const ButtonLogin = ({ buttonText, linkTo, ...rest }) => {
    return (
        <Link to={linkTo}>
            <HomeLoginButton {...rest}>
                <p>{buttonText}</p>
            </HomeLoginButton>
        </Link>
    );
};

export default ButtonLogin;
