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

`

const CalcInputContainer = ({ type, placeholder }) => {
    return <CalcInput type={type} placeholder={placeholder}/>;
};

export default CalcInputContainer;




// const [userInput, setUserInput] = useState('');

// //입력값을 가져와서 소문자로변경
// const getValue = (e) => {
//     setUserInput(e.target.value.toLowerCase())};

// <input onChange={getValue}/>


// // 데이터들을 배열로 monsters 에 배열 state로 담아준 상태
// const [monsters, setMonsters] = useState([]); 

// // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
// // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
// const searched = monsters.filter((item) =>
//     item.name.toLowerCase().includes(userInput)
// );