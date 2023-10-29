import React from 'react';
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
const CalcBox = styled.div`
    width: 60%;
    height: 150rem;
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

const CalcListContainer = styled.div`
    width: 80%;
    height: 55%;
    border-radius: 3rem;
    gap: 0.6vw;
    background-color: ${colors.white};
    margin: 5% auto;
    display: flex;
    justify-content: space-between; //수평정렬
    align-items:  flex-start; //수직정렬

    //flex-direction: column;
    overflow-y: auto;
    flex-wrap: wrap;
    
`
const CalcList = styled.div`
    width: 40%;
    height: 20%;
    margin: 4%;
    //margin-top: 0;
    display: flex;
    text-align: justify;
    border-radius: 3rem;
    color :  ${colors.black};
    background-color: ${colors.lightgray};
    &:hover {
        box-shadow:inset 5px 5px 5px #333;
    }
    gap: 0.6vw;
    justify-content: center; //수평정렬
    align-items: center; //수직정렬
`
const CalcCheckedContainer = styled.div`
    width: 80%;
    //margin-top : 5%;

    height: 20%;
    border-radius: 5rem;

    background-color: ${colors.white};
    margin: 5% auto;
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


const Calc = () => {


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

            <CalcBox>
                <CalcTitle>궁합 계산기</CalcTitle>

                <CalcSearch>
                    <CalcName>제품명</CalcName>
                    <CalcInput ></CalcInput>
                    
                    <CalcButton buttonText="+"></CalcButton> 
                </CalcSearch>


                {/* 흰색박스 */}
                <CalcListContainer>
                    {/* 회색박스 */}
                {DrugData.map(drug => (
                    
                    <CalcList key={drug.id}>
                        <PillsImage src={require(`../assets/${drug.image}`)} alt={drug.name} />
                        <CalcPills>
                            <CalcCom>{drug.company}</CalcCom>
                            <CalcPillsName>{drug.name}</CalcPillsName>
                        </CalcPills>
                    </CalcList>
                ))}
                </CalcListContainer>


                <CalcCheckedContainer>

                </CalcCheckedContainer>


            </CalcBox>

        </div>

        
    )
}


export default Calc