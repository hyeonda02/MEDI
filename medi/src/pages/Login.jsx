import React, { useState } from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LoginButton from "../components/button/button-auth";
import show from "../assets/images/show.png";
import noShow from "../assets/images/no-show.png";
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

const LoginContainer2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    opacity: 0.5;
    font-size: 0.5rem;
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    color: ${colors.white};
`;

const ShowDiv = styled.div`
    position: absolute;
    right: 2vw;
    top: 25%;

    @media (max-width: 1000px) {
        top: 23%;
    }
`;

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

const ErrorIcon = styled.img`
    width: 0.8vw;
    height: 0.8vw;
`;

const LoginError = styled.p`
    color: ${({ color }) => color};
    font-size: 0.8vw;
`;

const LoginInput = styled.input`
    width: 100%;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 0.5vw;
    outline: none;
    font-size: 1vw;
    box-sizing: border-box;
    padding: 2vw;
    color: ${colors.white};
    align-items: center;
    margin-top: -0.6vw;
`;

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const toggleShowPswd = () => {
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
                <LoginInput type="text" placeholder="아이디를 입력해주세요."/>
            </LoginContainer>

            <LoginContainer style={{ position: "relative", marginTop: "1vw" }}>
                <LoginP>비밀번호</LoginP>
                <LoginInput type={showPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요"/>

                <ShowDiv onClick={toggleShowPswd}>
                    <img src={showPass ? show : noShow} alt={showPass ? "show" : "no-show"} style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
                </ShowDiv>

                <ErrorContainer>
                    <ErrorIcon src={error} alt="error" />
                    <LoginError color={colors.red}>잘못된 정보입니다. 다시 입력해주세요.</LoginError>
                </ErrorContainer>
                <LoginButton buttonText="LOGIN" linkTo="/" type="submit"/>
            </LoginContainer>

            <LoginContainer2>
                <LoginP fontSize="1.5rem">아직 회원이 아니신가요?</LoginP>
                <StyledLink to="/signup">
                    <LoginP fontSize="1.5rem">회원가입 하기</LoginP>
                </StyledLink>
            </LoginContainer2>
        </div>
    );
};

export default Login;
