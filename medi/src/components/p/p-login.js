import colors from "../../styles/colors";
import { styled } from "styled-components";

const LoginP = styled.p`
    color: ${colors.white};
    font-size: 2rem;
`;

const LoginPContainer = ({ text }) => {
    return <LoginP>{text}</LoginP>
};

export default LoginPContainer