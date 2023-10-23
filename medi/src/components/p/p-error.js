import colors from "../../styles/colors";
import { styled } from "styled-components";
import error from "../../assets/images/error.png";

const LoginErrorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const LoginError = styled.p`
    color: ${colors.red};
    font-size: 1vw;
`

const LoginPError = ({ text }) => {
    return (
        <LoginErrorContainer>
            <img src={error} alt="error" style={{width: "1vw", height: "1vw"}} />
            <LoginError>{text}</LoginError>
        </LoginErrorContainer>
    );
};

export default LoginPError;
