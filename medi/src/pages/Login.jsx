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
        <LoginInput type="text" />
      </LoginContainer>
      <LoginContainer>
        <LoginP text="비밀번호"/>
        <LoginInput type="password"/>
        <SignButton buttonText="LOGIN" linkTo="/" />
      </LoginContainer>
    </div>
  )
}

export default Login
