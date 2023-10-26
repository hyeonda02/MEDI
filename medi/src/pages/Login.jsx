import React, { useState } from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LoginP from "../components/p/p-login";
import SignButton from "../components/button/button-sign";
import show from "../assets/images/show.png";
import noShow from "../assets/images/no-show.png";
import error from "../assets/images/error.png";

const LoginContainer = styled.div`
  width: 30%;
  margin-top: -1.5vw;
  display: flex;
  flex-direction: column;
  position: relative;
`

const LoginContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0.5;
  font-size: 0.5rem;
  margin-top: 1rem;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.white};
`

const ShowDiv = styled.div`
  position: absolute;
  right: 2vw;
  top: 25%;

  @media (max-width: 1000px) {
    top: 23%;
  }
`

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const ErrorIcon = styled.img`
  width: 0.8vw;
  height: 0.8vw;
`

const LoginError = styled.p`
  color: ${({ color }) => color};
  font-size: 0.8vw;
`
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
`

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
      <p style={{ color: colors.white, fontSize: "2.5vw", fontWeight: "bold" }}>로그인</p>
      
      <LoginContainer>
        <LoginP text="아이디"/>
        <LoginInput type="text" placeholder="아이디를 입력해주세요."/>
      </LoginContainer>
      <LoginContainer style={{ position: "relative", marginTop: "1vw" }}>
        <LoginP text="비밀번호"/>
        <LoginInput type={showPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요"/>

        <ShowDiv onClick={toggleShowPswd}>
          {showPass ? (
            <img src={show} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          ) : (
              <img src={noShow} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          )}
        </ShowDiv>

        <ErrorContainer>
          <ErrorIcon src={error} alt="error" />
          <LoginError color={colors.red}>잘못된 정보입니다. 다시 입력해주세요.</LoginError>
        </ErrorContainer>
        <SignButton buttonText="LOGIN" linkTo="/" type="submit"/>
      </LoginContainer>

      <LoginContainer2>
        <LoginP text="아직 회원이 아니신가요?" fontSize="1.5rem" />
        <StyledLink to="/signup">
          <LoginP text="회원가입 하기" fontSize="1.5rem" />
        </StyledLink>
      </LoginContainer2>
    </div>
  )
}

export default Login
