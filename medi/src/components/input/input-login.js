import { styled } from "styled-components";
import colors from "../../styles/colors";

const LoginInput = styled.input`
    width: 100%;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 0.5vw;
    outline: none;
    font-size: 2rem;
    box-sizing: border-box;
    padding: 2vw;
    color: ${colors.white};
    margin-bottom: 1rem;
`

const LoginInputContainer = ({ type }) => {
    return <LoginInput type={type} />;
};

export default LoginInputContainer;