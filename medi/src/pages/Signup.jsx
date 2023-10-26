import React, { useState, useEffect } from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import LoginP from "../components/p/p-login";
import SignButton from "../components/button/button-sign";
import show from "../assets/images/show.png";
import noShow from "../assets/images/no-show.png";

const LoginContainer = styled.div`
  width: 30%;
  margin-top: -1.5vw;
  position: relative;
`;

const ShowDiv = styled.div`
  position: absolute;
  margin-top: -4vw;
  right: 2vw;

  @media (max-width: 800px) {
    margin-top: -4.5vw;
  }

  @media (max-width: 500px) {
    margin-top: -5vw;
  }
`;

const Errordiv = styled.div`
    position: absolute;
    margin-top: -2vw;
`

const SignError = styled.p`
    font-size: 0.8vw;
    color: ${colors.white};
`;

const SignInput = styled.input`
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
    margin-bottom: 1.5vw;
`

const Signup = () => {
  // 비밀번호 및 비밀번호 확인 show
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const toggleShowPswd = () => {
    setShowPass(!showPass);
  };

  const toggleShowConfirmPswd = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  // 유효성 검사
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);
  const [id, setId] = useState("");
  const [isId, setIsId] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  // 이름
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    if (inputName.trim() === "") {
      setIsName(false);
    } else {
      setIsName(true);
    }
  };

  // 생년월일
  const handleBirthdayChange = (e) => {
    const inputBirthday = e.target.value;
    const birthdayFormat = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    setBirthday(inputBirthday);
    if (inputBirthday.match(birthdayFormat)) {
      setIsBirthday(true);
    } else {
      setIsBirthday(false);
    }
  };

  // 아이디
  const handleIdChange = (e) => {
    const inputId = e.target.value;
    const idFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setId(inputId);
    if (inputId.match(idFormat)) {
      setIsId(true);
    } else {
      setIsId(false);
    }
  };

  // 비밀번호
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%^*#?&])[A-Za-z\d@$!%^*#?&]{8,}$/;
    setPassword(inputPassword);
    if (inputPassword.match(passwordFormat)) {
      setIsPassword(true);
      if (inputPassword === confirmPassword) {
        setIsConfirmPassword(true);
      } else {
        setIsConfirmPassword(false);
      }
    } else {
      setIsPassword(false);
      setIsConfirmPassword(false);
    }
  };

  // 비밀번호 확인
  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);
    if (inputConfirmPassword === password) {
      setIsConfirmPassword(true);
    } else {
      setIsConfirmPassword(false);
    }
  };

    //포커스
  const [nameTouched, setNameTouched] = useState(false);
  const [birthdayTouched, setBirthdayTouched] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  useEffect(() => {
    if (name.trim() !== '') {
      setNameTouched(true);
    }
    if (birthday.trim() !== '') {
      setBirthdayTouched(true);
    }
    if (id.trim() !== '') {
      setIdTouched(true);
    }
    if (password.trim() !== '') {
      setPasswordTouched(true);
    }
    if (confirmPassword.trim() !== '') {
      setConfirmPasswordTouched(true);
    }
  }, [name, birthday, id, password, confirmPassword]);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <p style={{ color: colors.white, fontSize: "2.5vw", fontWeight: "bold" }}>회원가입</p>

      <LoginContainer>
        <form>
          <LoginP text="이름" />
          <SignInput type="text" placeholder="이름을 입력해주세요." value={name} onChange={handleNameChange} />
          {!isName && nameTouched && (
            <Errordiv>
              <SignError style={{ color: colors.red }}>필수 입력 항목입니다 :(</SignError>
            </Errordiv>
          )}
          {isName && nameTouched && (
            <Errordiv>
              <SignError style={{ color: colors.green }}>올바른 형식입니다 :)</SignError>
            </Errordiv>
          )}

          <LoginP text="생년월일" />
          <SignInput type="text" placeholder="생년월일을 입력해주세요.(ex. 20231026)" value={birthday} onChange={handleBirthdayChange} />
          {!isBirthday && birthdayTouched && (
            <Errordiv>
              <SignError style={{ color: colors.red }}>형식에 맞게 8자리로 입력해주세요 :(</SignError>
            </Errordiv>
          )}
          {isBirthday && birthdayTouched &&(
            <Errordiv>
              <SignError style={{ color: colors.green }}>올바른 형식입니다 :)</SignError>
            </Errordiv>
          )}

          <LoginP text="아이디" />
          <SignInput type="text" placeholder="아이디를 입력해주세요." value={id} onChange={handleIdChange} />
          {!isId && idTouched && (
            <Errordiv>
              <SignError style={{ color: colors.red }}>영문, 숫자 포함 6자리 이상 입력해주세요 :(</SignError>
            </Errordiv>
          )}
          {isId && idTouched && (
            <Errordiv>
              <SignError style={{ color: colors.green }}>올바른 형식입니다 :)</SignError>
            </Errordiv>
          )}

          <LoginP text="비밀번호" />
          <SignInput type={showPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요." value={password} onChange={handlePasswordChange} />
          <ShowDiv onClick={toggleShowPswd}>
            {showPass ? (
              <img src={show} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
            ) : (
              <img src={noShow} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
            )}
          </ShowDiv>
          {!isPassword && passwordTouched && (
            <Errordiv>
              <SignError style={{ color: colors.red }}>영문, 숫자, 특수문자 포함 8자리 이상 입력해주세요 :(</SignError>
            </Errordiv>
          )}
          {isPassword && passwordTouched && (
            <Errordiv>
              <SignError style={{ color: colors.green }}>올바른 형식입니다 :)</SignError>
            </Errordiv>
          )}

          <LoginP text="비밀번호 확인" />
          <SignInput type={showConfirmPass ? "text" : "password"} placeholder="비밀번호를 입력해주세요." value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <ShowDiv onClick={toggleShowConfirmPswd}>
            {showPass ? (
              <img src={show} alt="show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
            ) : (
              <img src={noShow} alt="no-show" style={{ height: "1.2vw", width: "1.8vw", cursor: "pointer" }} />
            )}
          </ShowDiv>
          {!isConfirmPassword && confirmPasswordTouched && (
            <Errordiv>
              <SignError style={{ color: colors.red }}>비밀번호가 일치하지 않습니다 :(</SignError>
            </Errordiv>
          )}
          {isConfirmPassword && confirmPasswordTouched && (
            <Errordiv>
              <SignError style={{ color: colors.green }}>비밀번호가 일치합니다 :)</SignError>
            </Errordiv>
          )}

          <SignButton buttonText="SIGN UP" linkTo="/login" type="submit"/>
        </form>
      </LoginContainer>
    </div>
  );
};

export default Signup;
