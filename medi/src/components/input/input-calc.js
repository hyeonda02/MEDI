import { styled } from "styled-components";
import colors from "../../styles/colors";

const CalcInput = styled.input`
    width: 50%;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 0.5vw;
    outline: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    padding: 1.5vw;
    color: ${colors.black};
    font-size: 2.5rem;
    align-items: center; //수직정렬
    &::placeholder {
        /* 힌트 메시지 스타일링 */
        color: ${colors.lightgray}; /* 원하는 색상으로 설정 */
        font-size: 2.5rem;
        
    }

`

// const CalcInputContainer = ({ type, placeholder }) => {
//     return <CalcInput type={type} placeholder={placeholder}/>;
// };


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




