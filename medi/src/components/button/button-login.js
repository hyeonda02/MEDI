import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const HomeLoginButton = styled.button`
    width: 13.8rem;
    height: 4.4rem;
    background-color: ${colors.mainBlue};
    border-radius: 0.8rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonLogin = () => {
    return (
        <Link to = "/login">
            <HomeLoginButton>
                <p style = {{color: `${colors.black}`}}>LOGIN</p>
            </HomeLoginButton>
        </Link>
    )
}

export default ButtonLogin