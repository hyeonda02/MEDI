import React, { useState, useEffect } from 'react';
import SignButton from "../components/button/button-auth";
import Input from "../components/input/input-auth";
import colors from "../styles/colors";
import { styled } from "styled-components";

const SignP = styled.p`
  color: ${colors.white};
  font-size: 1vw;
  font-weight: bold;
`

const SignUp = () => {
  //유효성 검사
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  
  const [birthday, setBirthday] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);
  const [birthdayTouched, setBirthdayTouched] = useState(false);
  
  const [id, setId] = useState("");
  const [isId, setIsId] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  //이름
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    if (inputName.trim() === "") {
      setIsName(false);
    } else {
      setIsName(true);
    }
  };

  //생년월일
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

  //아이디
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

  //비밀번호
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

  //비밀번호 확인
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

  //비밀번호 및 비밀번호 확인 show
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const toggleShowPassword = () => {
    setShowPass(!showPass);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  //에러 메시지
  const nameError = "필수 입력 항목입니다 :(";
  const birthdayError = "형식에 맞게 8자리로 입력해주세요 :(";
  const idError = "영문, 숫자 포함 6자리 이상 입력해주세요 :(";
  const passwordError = "영문, 숫자, 특수문자 포함 8자리 이상 입력해주세요 :(";
  const confirmPasswordError = "비밀번호가 일치하지 않습니다 :(";

  //성공 메시지
  const nameSuccess = "올바른 형식입니다 :)";
  const birthdaySuccess = "올바른 형식입니다 :)";
  const idSuccess = "올바른 형식입니다 :)";
  const passwordSuccess = "올바른 형식입니다 :)";
  const confirmPasswordSuccess = "비밀번호와 일치합니다 :)";

  return (
    <form style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <p style={{ color: colors.white, fontSize: "2.5vw", fontWeight: "bold" }}>회원가입</p>
        <div style={{ width: "30%", display: "flex", flexDirection: "column"}}>
          <SignP>이름</SignP>
          <Input show="text" isInput={isName} input={name} handleInputChange={handleNameChange} placeholder="이름을 입력해주세요." inputError={nameError} inputSuccess={nameSuccess} showInputError={nameTouched} />
          <SignP>생년월일</SignP>
          <Input show="text" isInput={isBirthday} input={birthday} handleInputChange={handleBirthdayChange} placeholder="생년월일을 입력해주세요.(ex. 20231026)" inputError={birthdayError} inputSuccess={birthdaySuccess} showInputError={birthdayTouched} />
          <SignP>아이디</SignP>
          <Input show="text" isInput={isId} input={id} handleInputChange={handleIdChange} placeholder="아이디를 입력해주세요." inputError={idError} inputSuccess={idSuccess} showInputError={idTouched} />
          <SignP>비밀번호</SignP>
          <Input show={showPass} isInput={isPassword} toggleShow={toggleShowPassword} handleInputChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." inputError={passwordError} inputSuccess={passwordSuccess} showInputError={passwordTouched} />
          <SignP>비밀번호 확인</SignP>
          <Input show={showConfirmPass} isInput={isConfirmPassword} toggleShow={toggleShowConfirmPassword} handleInputChange={handleConfirmPasswordChange} placeholder="비밀번호를 다시 입력해주세요." inputError={confirmPasswordError} inputSuccess={confirmPasswordSuccess} showInputError={confirmPasswordTouched} />
          <SignButton buttonText="SIGN UP" linkTo="/login" type="submit" />
        </div>
    </form>
  );
};

export default SignUp;
