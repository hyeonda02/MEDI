import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";

/* const HomeLoginButton = styled.button`
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
`; */

const HomeLoginButton = styled.button`
    width: 40%;
    height: 3vw;
    font-size: 1.5vw;
    border-radius: 1.5vw;
    color: ${colors.white};
    background-color: ${colors.mainBlue};
    border: none;
    display: block;
    margin: 0% auto;
    margin-bottom: 1%;
    display: flex; 
    align-items: center;
    justify-content: center;
`

const ButtonLogin = ({ buttonText, ...rest }) => {
    return (
            <HomeLoginButton {...rest}>
                <p>{buttonText}</p>
            </HomeLoginButton>

    );
};

export default ButtonLogin;
