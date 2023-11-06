import React, { useState } from "react";
import ButtonLocation from "../button/button-Loc";
import LocInputContainer from "../input/input-Loc";

const SearchLocation = () => {
    const [inputValue, setInputValue] = useState("");

    // 입력값 변경 핸들러
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    // 버튼 클릭 핸들러
    const handleButtonSubmit = () => {
        // 입력한 값 (inputValue)를 다른 컴포넌트로 전달하거나 처리
        console.log("입력한 값:", inputValue);
        // 다른 작업을 수행할 수 있음
    };

    return (
        <div>
            {/* 입력 필드와 입력값 변경 핸들러를 LocInputContainer 컴포넌트로 전달 */}
            <LocInputContainer onInputChange={handleInputChange} />

            {/* 버튼과 버튼 클릭 핸들러를 ButtonLocation 컴포넌트로 전달 */}
            <ButtonLocation buttonText="제출" onSubmit={handleButtonSubmit} />
        </div>
    );
};

export default SearchLocation;