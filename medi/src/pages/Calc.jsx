import React, {useState} from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import doctor from "../assets/images/doctor.png";
import CalcInput from "../components/input/input-calc";
import CalcButton from "../components/button/button-calc";
import DeleteCalc from "../components/button/button-delete";
import Completebutton from "../components/button/button-header";
import DrugData from "../util/drug";


const CalcBannerP1 = styled.p`
    color: ${colors.white};
    font-size: 2.5rem;
    font-weight: bold;
`
const CalcBannerP2 = styled.p`
    color: ${colors.white};
    font-size: 2rem;
    margin-top: -0.5rem;
`

const CalcExplainContainer = styled.div`
    width: 70%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    //background-color: ${colors.gray};
    
`
const CalcExplain = styled.div`
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
    width: 85%;
    height: 90%;
    border-radius: 2.5vw;
    margin-top: 5rem;
    background-color: ${colors.subBlue};
`
const CalcTitle = styled.div`
    font-size : 1.5vw;
    margin-left : 5rem;
    margin-top : 4rem;
    color : ${colors.white};
    text-shadow: 2.5px 2px 2px gray; 
`
const CalcSearch = styled.div`
    width: 100%;
    margin-top : 3vw;
    display: flex;
    gap: 2vw;
    align-items: center;
    justify-content: center;
`
// 제품명
const CalcName = styled.div`
    font-size : 1.5vw;
    //margin-left : 5rem;
    color : ${colors.white};
    text-shadow: 2.5px 2px 2px gray; 
`
// 상품목록 박스
const CalcListContainerBig = styled.div`
    width: 70%;
    //height: 100%;
    border-radius: 1.5vw;
    // gap: 1vw;
    background-color: ${colors.white};
    margin: 5% auto;
    // display: flex;
    //justify-content: space-between; //수평정렬
    //align-items:  flex-start; //수직정렬

    //flex-direction: column;
    
    //flex-wrap: wrap;
`
// 상품 목록 글씨
const CalcListEx = styled.div`
    height: 3rem;
    font-size : 2vw;
    margin-left : 4vw;
    margin-top: 2vw;
    
    color : ${colors.silver};
`

// 스크롤 박스
const CalcListContainer = styled.div`
    width: 99%;
    height: 38vw;
    //gap: 0.6vw;
    background-color: ${colors.white};
    border-radius: 3rem;
    display: flex;
    justify-content: center; //수평정렬
    //align-items: center; //수직정렬
    margin-top: 1vw;
    //flex-direction: column;
    overflow-y: auto;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${colors.subBlue}; /* 스크롤바 색상 */
        border-radius: 6px;
        margin-right: 5%;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${colors.mainBlue}; /* 호버 상태의 스크롤바 색상 */
    }
    
`
// 회색 영양제 박스
const CalcList = styled.div`
    width: 40%;
    height: 30%;
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

// 선택한 항목
const CalcListEx2 = styled.div`
    font-size : 2vw;
    margin: 5%;
    //margin-top: 5%;
    color : ${colors.silver};
`
// 결과 박스
const CalcCheckedContainer = styled.div`
    width: 20%;
    height: 40vw;
    padding-top:0.5rem;
    padding-bottom:3rem;
    border-radius: 1.5vw;
    background-color: ${colors.white};
    margin: 5% auto;
    align-items: center; //수직정렬
    
`
// 선택된 영양제
const CheckedPills = styled.div`
    display: flex;
    align-items: center; //수직정렬
    flex-direction: column; // 세로로 정렬
    justify-content: center; //수평정렬
    margin: auto;
    margin-top:1vw;
    width: 100%;
    gap: 2vw;
`

const PillsImage = styled.img`
    width: 35%;
    height: 75%;
`

const CalcPills = styled.div`
    color: black;
    font-size: 1vw;
    
`
const CalcCom = styled.div`
    color: black;
`
const CalcPillsName = styled.div`
    color: black;
    font-size: 1.5vw;
`

const CalcPillsName2 = styled.div`
    color: black;
    width:5vw;
    font-size: 1.2vw;
`
// 완료 버튼
// const Completebutton = styled.button`
//     width: 50%;
//     //min-height: 15%;
//     border-radius: 1.5vw;
//     background-color: ${colors.mainBlue};
//     color: ${colors.white};
//     font-size: 2vw;
//     &:hover {
//         background-color: ${colors.darkBlue};
//     }
//     border: none;
//     display: block;
//     margin: 0% auto;
//     margin-bottom: 5%;
//`
const Warning = styled.div`
    color: red;
    text-align: center;
    font-size: 1vw;
`

const Flex = styled.div`
    display:flex;

`
const Flex2 = styled.div`
    display:flex;
    width:15vw;
    align-items: center;
    justify-content: space-between;
    margin: auto;

`



const Calc = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // 사용자의 입력 값을 저장할 상태
    // 사용자의 입력 값이 type 또는 name과 일치하는 항목을 필터링
    const filteredDrugs = DrugData.filter(drug =>
        drug.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // 사용자의 입력을 업데이트하는 함수
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleBoxClick = (id) => {
        if (selectedItems.includes(id)) {
            // 이미 선택된 항목을 클릭하면 선택 해제
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            if (selectedItems.length < 5) {
                // 5개 미만일 때만 새로운 항목을 선택
                setSelectedItems([...selectedItems, id]);
            }
        }
    };

    // 선택 항목 전체 삭제
    const handleDeleteAll = () => {
        setSelectedItems([]); // 선택한 항목 초기화
    };

    //선택 항목 하나 삭제
    const handleDeleteItem = (id) => {
        setSelectedItems(selectedItems.filter((item) => item !== id));
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
                        <CalcBannerP2>
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
                    {/* 검색어 입력란 */}
                    <CalcInput onChange={handleSearchTermChange} value={searchTerm} placeholder="제약사, 상품명을 검색하세요" /> 
                    {/* <CalcButton buttonText="+"></CalcButton>  */}
                </CalcSearch>

                <Flex>
                    {/* 흰색박스 */}
                    <CalcListContainerBig>
                        <CalcListEx>상품 목록</CalcListEx>
                        <CalcListContainer>
                        {/* 회색박스 */}
                        {filteredDrugs.map(drug => (
                            
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
                        <Flex2>
                            <CalcListEx2>선택한 항목</CalcListEx2>
                            <DeleteCalc buttonText="전체삭제" onClick={handleDeleteAll}></DeleteCalc> 
                        </Flex2>
                        <CheckedPills>
                            <Warning>* 최대 5개까지 선택할 수 있습니다.</Warning>
                            {selectedItems.map(id => {
                                const selectedDrug = DrugData.find(drug => drug.id === id);
                                return (
                                    <div key={selectedDrug.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <CalcButton buttonText="-"  onClick={() => handleDeleteItem(selectedDrug.id)} ></CalcButton>
                                        <UserImage
                                            src={require(`../assets/${selectedDrug.image}`)}
                                            alt={selectedDrug.name}
                                            style={{ width: "30%", height: "30%", margin: "0 5%"}}
                                        />
                                        <div>
                                            <CalcPillsName2>{selectedDrug.type}</CalcPillsName2>
                                        </div>
                                    </div>
                                );
                            })}
                        </CheckedPills>
                        
                    </CalcCheckedContainer>
                </Flex>
                

                <Completebutton
                    buttonText="완료"
                    linkTo="/result"
                    style={{
                        width: '50%',
                        height: "7vw",
                        borderRadius: '1.5vw',
                        color: colors.white,
                        fontSize: '2vw',
                        border: 'none',
                        display: 'block',
                        margin: '0% auto',
                        marginBottom: '5%',
                    }}
                    />
                

            </CalcBox>

        </div>

        
    )
}


export default Calc