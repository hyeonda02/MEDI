import { styled } from "styled-components";
import colors from "../../styles/colors";

const CalcInput = styled.input`
    width: 30%;
    
    height: 01vw;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 0.5vw;
    outline: none;
    box-sizing: border-box;
    padding: 1vw;
    color: ${colors.black};
    font-size: 1vw;
    &::placeholder {
        /* 힌트 메시지 스타일링 */
        color: ${colors.lightgray};
        font-size: 1vw;
        line-height: 1vw;
    }

`

const CalcInputContainer = ({ type, placeholder, onChange, value }) => {
    return (
        <CalcInput
            type={type}
            placeholder={placeholder}
            onChange={onChange} // 입력값이 변경될 때 호출될 함수
            value={value} // 입력값 상태
        />
    );
};

export default CalcInputContainer;


