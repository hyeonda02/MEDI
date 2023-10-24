import React, { useState } from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import LoginP from "../components/p/p-login";
import LoginInput from "../components/input/input-login";
import SignButton from "../components/button/button-sign";
import show from "../assets/images/show.png";
import noShow from "../assets/images/no-show.png";

const LoginContainer = styled.div`
  width: 30%;
  margin-top: -1.5vw;
`

const ShowDiv = styled.div`
  position: absolute;
  top: 30.5%;
  right: 2vw;

  @media (max-width: 1100px) {
    top: 34%;
  }
`

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const toggleShowPswd = () => {
    setShowPass(!showPass);
  };

  const toggleShowConfirmPswd = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <p style={{ color: colors.white, fontSize: "2.5vw", fontWeight: "bold" }}>회원가입</p>

      <LoginContainer>
        <LoginP text="이름" />
        <LoginInput type="text" placeholder="이름을 입력해주세요." />
      </LoginContainer>
      <LoginContainer style={{ marginTop: "1vw" }}>
        <LoginP text="생년월일" />
        <LoginInput type="text" placeholder="생년월일을 8자리로 입력해주세요." />
      </LoginContainer>
      <LoginContainer style={{ marginTop: "1vw" }}>
        <LoginP text="아이디" />
        <LoginInput type="text" placeholder="아이디를 입력해주세요." />
      </LoginContainer>
      <LoginContainer style={{ position: "relative", marginTop: "1vw" }}>
        <LoginP text="비밀번호" />
        <LoginInput type={showPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요." />
        <ShowDiv onClick={toggleShowPswd}>
          {showPass ? (
            <img src={show} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          ) : (
            <img src={noShow} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          )}
        </ShowDiv>
      </LoginContainer>

      <LoginContainer style={{ position: "relative", marginTop: "1vw" }}>
        <LoginP text="비밀번호 확인" />
        <LoginInput type={showConfirmPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요." />
        <ShowDiv onClick={toggleShowConfirmPswd}>
          {showPass ? (
            <img src={show} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          ) : (
            <img src={noShow} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
          )}
        </ShowDiv>

        <SignButton buttonText="SIGN UP" linkTo="/login" type="submit" />
      </LoginContainer>
    </div>
  )
}

export default Signup
