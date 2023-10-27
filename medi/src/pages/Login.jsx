import React, { useState } from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LoginButton from "../components/button/button-auth";
import Input from "../components/input/input-auth";
import error from "../assets/images/error.png";

const LoginP = styled.p`
    color: ${colors.white};
    font-size: ${({ fontSize }) => fontSize || '1vw'};
    font-weight: bold;
`;

const LoginContainer = styled.div`
    width: 30%;
    margin-top: -1.5vw;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    color: ${colors.white};
`;

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: -1.5vw;
`;

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const toggleShowPassword = () => {
    setShowPass(!showPass);
    };


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <LoginP fontSize="2.5vw">로그인</LoginP>

            <LoginContainer>
                <LoginP>아이디</LoginP>
                <Input show="text" placeholder="아이디를 입력해주세요." />
            </LoginContainer>

            <LoginContainer style={{ position: "relative", marginTop: "-1vw" }}>
                <LoginP>비밀번호</LoginP>
                <Input show={showPass} toggleShow={toggleShowPassword} placeholder="비밀번호를 입력해주세요."/>

                <ErrorContainer>
                    <img src={error} alt="error" style={{width: "0.8vw", height: "0.8vw"}}/>
                    <LoginP style={{color: colors.red, fontSize: "0.8vw"}}>잘못된 정보입니다. 다시 입력해주세요.</LoginP>
                </ErrorContainer>
                <LoginButton buttonText="LOGIN" linkTo="/" type="submit"/>
            </LoginContainer>

            <div style={{display: "flex", gap: "1rem", opacity: "0.5", fontSize: "0.5rem"}}>
                <LoginP fontSize="1.5rem">아직 회원이 아니신가요?</LoginP>
                <StyledLink to="/signup">
                    <LoginP fontSize="1.5rem">회원가입 하기</LoginP>
                </StyledLink>
            </div>
        </div>
    );
};

export default Login;
