import colors from "../../styles/colors";
import { styled } from "styled-components";

const LoginP = styled.p`
    color: ${colors.white};
    font-size: ${({ fontSize }) => fontSize || '2rem'};
`;

const LoginPContainer = ({ text, fontSize }) => {
    return <LoginP fontSize={fontSize}>{text}</LoginP>;
};

export default LoginPContainer;
