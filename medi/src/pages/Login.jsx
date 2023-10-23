import React, { useState } from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LoginP from "../components/p/p-login";
import LoginInput from "../components/input/input-login";
import SignButton from "../components/button/button-sign";
import LoginPError from "../components/p/p-error";
import show from "../assets/images/show.png";
import noShow from "../assets/images/no-show.png";

const LoginContainer = styled.div`
  width: 30%;
  margin-top: -1.5vw;
`

const LoginContainer2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0.5;
  font-size: 0.5rem;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.white};
`

const ShowDiv = styled.div`
  position: absolute;
  top: 26.5%;
  right: 2vw;

  @media (max-width: 1100px) {
    top: 28%;
  }
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
      <p style={{color: colors.white, fontSize: "2.5vw", fontWeight: "bold"}}>로그인</p>
      
      <LoginContainer>
        <LoginP text="아이디"/>
        <LoginInput type="text" placeholder="아이디를 입력해주세요."/>
      </LoginContainer>
      <LoginContainer style={{position:"relative", marginTop: "1vw"}}>
        <LoginP text="비밀번호"/>
        <LoginInput type={showPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요."/>

        <ShowDiv onClick={toggleShowPswd}>
          {showPass ? (
            <img src={show} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          ) : (
              <img src={noShow} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          )}
        </ShowDiv>

        <LoginPError text="잘못된 정보입니다. 다시 로그인해주세요." />
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
