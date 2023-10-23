import React from 'react'
import colors from "../styles/colors";
import { styled } from "styled-components";
import LoginP from "../components/p/p-login";
import LoginInput from "../components/input/input-login";
import SignButton from "../components/button/button-sign";

const LoginContainer = styled.div`
  width: 30%;
`

const Login = () => {
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
        <LoginInput type="text" placeholder="아이디를 입력해주세요." />
      </LoginContainer>
      <LoginContainer style={{marginTop: "2rem"}}>
        <LoginP text="비밀번호"/>
        <LoginInput type="password" placeholder="비밀번호를 입력해주세요."/>
        <SignButton buttonText="LOGIN" linkTo="/" />
      </LoginContainer>
    </div>
  )
}

export default Login
