import React, {useState} from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import doctor from "../assets/images/doctor.png";
import CalcInput from "../components/input/input-calc";
import CalcButton from "../components/button/button-calc";
import DrugData from "../util/drug";


const CalcBannerP1 = styled.p`
    color: ${colors.white};
    font-size: 2rem;
`
const CalcBannerP2 = styled.p`
    color: ${colors.white};
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: -0.5rem;
`

const CalcExplainContainer = styled.div`
    width: 50%;
    margin-top: 5rem;
    //background-color: ${colors.gray};
    
`
const CalcExplain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2vw;
`
const UserImage = styled.img`
    width: 13rem;
    height: 13rem;
`
const CalcExplainBar = styled.div`
    width: 0.5rem;
    height: 10rem;
    background-color: ${colors.white};
`
// 하늘색 박스
const CalcBox = styled.div`
    width: 60%;
    height: 100vw;
    border-radius: 5rem;
    margin-top: 5rem;
    background-color: ${colors.subBlue};
`
const CalcTitle = styled.div`
    font-size : 3rem;
    margin-left : 5rem;
    margin-top : 4rem;
    color : ${colors.white};
    text-shadow: 2.5px 2px 2px gray; 
`
const CalcSearch = styled.div`
    width: 100%;
    margin-top : 6rem;
    display: flex;
    gap: 2vw;
    align-items: center;
    justify-content: center;
`
// 제품명
const CalcName = styled.div`
    font-size : 3rem;
    //margin-left : 5rem;
    color : ${colors.white};
    text-shadow: 2.5px 2px 2px gray; 
`
// 흰박스
const CalcListContainerBig = styled.div`
    width: 80%;
    height: 50%;
    border-radius: 3rem;
    gap: 0.6vw;
    background-color: ${colors.white};
    margin: 8% auto;
    display: flex;
    //justify-content: space-between; //수평정렬
    //align-items:  flex-start; //수직정렬

    //flex-direction: column;
    
    flex-wrap: wrap;
`
// 상품 목록
const CalcListEx = styled.div`
    height: 3rem;
    font-size : 3rem;
    margin-left : 4rem;
    margin-top: 3rem;
    color : ${colors.silver};
`

// 스크롤 박스
const CalcListContainer = styled.div`
    width: 100%;
    height: 95%;
    //gap: 0.6vw;
    background-color: ${colors.white};
    border-radius: 3rem;
    display: flex;
    justify-content: center; //수평정렬
    align-items: center; //수직정렬

    //flex-direction: column;
    overflow-y: auto;
    flex-wrap: wrap;
    
`
// 회색 영양제 박스
const CalcList = styled.div`
    width: 40%;
    height: 20%;
    margin: 4%;
    //margin-top: 0;
    display: flex;
    text-align: justify;
    border-radius: 1.5vw;
    color :  ${colors.black};
    background-color: ${colors.lightgray};
    &:hover {
        box-shadow: inset 5px 5px 5px #555;
    }
    gap: 0.6vw;
    justify-content: center; //수평정렬
    align-items: center; //수직정렬


    ${({ isSelected }) =>
        isSelected &&
        `
        background-color: ${colors.silver};
    `}
`

// 선택 항목
const CalcListEx2 = styled.div`
    width: 30%;
    height: 10%;
    font-size : 3rem;
    margin: 5%;
    margin-top: 5%;
    color : ${colors.silver};
`
// 결과 박스
const CalcCheckedContainer = styled.div`
    width: 80%;
    //height: 10%;
    padding-top:0.5rem;
    padding-bottom:3rem;
    border-radius: 5rem;
    background-color: ${colors.white};
    margin: 5% auto;
    align-items: center; //수직정렬
`
// 선택된 영양제
const CheckedPills = styled.div`
    align-items: center; //수직정렬
    display: flex;
    justify-content: center; //수평정렬
    margin: auto;
    width: 100%;
`

const PillsImage = styled.img`
    width: 30%;
    height: 60%;
`

const CalcPills = styled.div`
    color: black;
    font-size: 2rem;
    
`
const CalcCom = styled.div`
    color: black;
`
const CalcPillsName = styled.div`
    color: black;
    font-size: 3rem;
    
`
// 완료 버튼
const Completebutton = styled.button`
    width: 50%;
    height: 5%;
    border-radius: 3rem;
    background-color: ${colors.mainBlue};
    color: ${colors.white};
    font-size: 4rem;
    &:hover {
        background-color: ${colors.darkBlue};
    }
    border: none;
    display: block;
    margin: 0 auto;
`



const Calc = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleBoxClick = (id) => {
        if (selectedItems.includes(id)) {
            // 이미 선택된 항목을 클릭하면 선택 해제
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            // 새로운 항목을 선택
            setSelectedItems([...selectedItems, id]);
        }
    };

    return (

        <div className="Calc" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5vw"
        }}>

            <CalcExplainContainer>
                <CalcExplain>
                    <UserImage src={doctor} alt="doctor"/>
                    <CalcExplainBar/>
                    <div className="CalcExplainContainer">
                        <CalcBannerP1>"약을 섭취하기 전에 잠깐!"</CalcBannerP1>
                        <CalcBannerP2 style={{fontSize: "2.1rem"}}>
                            약의 성분을 원하는 대로 조합해 보세요.<br/>
                            여려가지 약을 함께 섭취할 때 어떤 부작용이 일어날 수 있을 지를 MEDI:가 알려드립니다
                        </CalcBannerP2>
                    </div>
                </CalcExplain>
            </CalcExplainContainer>

            {/* 하늘색박스 */}
            <CalcBox>
                <CalcTitle>궁합 계산기</CalcTitle>

                <CalcSearch>
                    <CalcName>제품명</CalcName>
                    <CalcInput ></CalcInput>
                    
                    <CalcButton buttonText="+"></CalcButton> 
                </CalcSearch>

                <CalcListContainerBig>
                    <CalcListEx>상품 목록</CalcListEx>
                    {/* 흰색박스 */}
                    <CalcListContainer>
                    {/* 회색박스 */}
                    {DrugData.map(drug => (
                        
                        <CalcList key={drug.id} isSelected={selectedItems.includes(drug.id)} onClick={() => handleBoxClick(drug.id)}>
                            <PillsImage src={require(`../assets/${drug.image}`)} alt={drug.name} />
                            <CalcPills>
                                <CalcCom>{drug.company}</CalcCom>
                                <CalcPillsName>{drug.name}</CalcPillsName>
                            </CalcPills>
                        </CalcList>
                    ))}
                    </CalcListContainer>
                </CalcListContainerBig>

                

                {/* 체크 흰박스 */}
                <CalcCheckedContainer>     
                    <CalcListEx2>선택한 항목</CalcListEx2>
                    <CheckedPills>
                        <UserImage src={doctor} alt="doctor"/>
                        <UserImage src={doctor} alt="doctor"/>
                        <UserImage src={doctor} alt="doctor"/>
                        <UserImage src={doctor} alt="doctor"/>
                        <UserImage src={doctor} alt="doctor"/>
                    </CheckedPills>
                    
                    
                </CalcCheckedContainer>
                    
                <Completebutton>완료</Completebutton>
                

            </CalcBox>

        </div>

        
    )
}


export default Calc