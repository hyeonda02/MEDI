import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import colors from "../styles/colors";
import styled from "styled-components";
import ListDrug from "../components/list/list-drug";
import DrugData from "../util/drug";
import homeBanner from "../assets/images/homeBanner.png";
import user from "../assets/images/user.png";
import medi from "../assets/images/medi.png";
import mediLogo from "../assets/images/mediLogo.png";
import calcIcon from "../assets/images/calc-icon.png";
import locationIcon from "../assets/images/location-icon.png";
import homeDown from "../assets/images/home-down.png";

const HomeP = styled.p`
    color: ${colors.white};
    font-size: 1.5rem;
`

const HoverHomeP = styled(HomeP)`
    line-height: 3rem;
    &:hover {
        color: ${colors.mainBlue};
    }
`;

const HomeContainer = styled.div`
    width: 80%;
    margin-top: 5rem;
`
const HomeExplain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2vw;
`


const HomeMiddleContainer = styled.div`
    padding-top: 2vw;
    padding-bottom: 1vw;
    display: flex;
    justify-content: space-between;
`
const HomeMiddle = styled.div`
    width: 100%;
    background-color: ${colors.subBlue};
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const Home = () => {
    //애니메이션
    const [drugData, setDrugData] = useState(DrugData);
    const [slicedData, setSlicedData] = useState(shuffleArray(drugData).slice(0, 12));

    useEffect(() => {
        setDrugData(DrugData);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlicedData(shuffleArray(drugData).slice(0, 12));
        }, 5000);
        return () => clearInterval(interval);
    }, [drugData]);

    return (
        <div className="Home" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5vw"
        }}>
            <img src={homeBanner} alt="homeBanner" style={{
                width: "100%", 
                marginTop:"3rem"
            }}/>

            <HomeContainer>
                <HomeExplain>
                    <img src={user} alt="user" style={{width: "13rem", height: "13rem"}}/>
                    <div style={{width: "0.5rem", height: "10rem", backgroundColor: colors.white}} />
                    <div className="HomeExplainContainer">
                        <HomeP>임산부라 약을 먹을 때 조심해야 하는데..</HomeP>
                        <HomeP style={{ fontSize: "1.7rem", fontWeight: "bold", marginTop: "-0.5rem" }}>
                            "약에 어떤 성분이 있는지 모르겠어요"<br/>
                            "복용할 약 종류가 많은데 함께 먹어도 괜찮을까요?"
                        </HomeP>
                    </div>
                </HomeExplain>
                <HomeExplain style={{justifyContent: "flex-end"}}>
                    <div className="HomeExplainContainer">
                        <HomeP style={{textAlign: "right"}}>
                            의사와 상담을 추천하지만, 어렵다면 MEDI:가 도움드리겠습니다.
                        </HomeP>
                        <HomeP style={{ textAlign: "right", fontSize: "1.7rem", fontWeight: "bold", marginTop: "-0.5rem" }}>
                            "MEDI: 알약 정보 제공으로 성분을 쉽게 확인하세요"<br />
                            "MEDI: 성분 계산으로 여러 종류의 약을 혼합해보세요."
                        </HomeP>
                    </div>
                    <div style={{width: "0.5rem", height: "10rem", backgroundColor: colors.white}} />
                    <img src={medi} alt="medi" style={{width: "13rem", height: "13rem"}}/>
                </HomeExplain>
            </HomeContainer>

            <HomeMiddle>
                <img src={mediLogo} alt="mediLogo" style={{
                    width: "3rem", 
                    height: "3rem", 
                    paddingTop: "3vw"
                }}/>
                <HomeP style={{marginTop: "1rem"}}>영양제 종류</HomeP>
                <div style={{width: "80%", height: "0.5vw", backgroundColor: colors.white}}/>
                
                <HomeMiddleContainer>
                    {drugData.length > 0 &&
                        <ListDrug data={slicedData} />
                    }
                </HomeMiddleContainer>
                
                <Link to="/pills">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <HomeP style={{ fontSize: "1.8rem", fontWeight: "bold" }}>더보기</HomeP>
                        <img src={homeDown} alt="homeDown" style={{
                            width: "2rem",
                            marginTop: "-2rem",
                            marginBottom: "2rem"
                        }}/>
                    </div>
                </Link>
            </HomeMiddle>

            <HomeContainer style={{marginTop:"4vw"}}>
                <Link to ="/calc">
                    <HomeExplain>
                        <img src={calcIcon} alt="calc-icon" style={{
                            width: "5vw",
                            height: "5vw"
                        }}/>
                        <HoverHomeP>
                            약의 성분 조합을 계산할 수 있어요.<br/>
                            여러 종류의 약을 섭취할 시 주의사항을 한 눈에 볼 수 있어요.
                        </HoverHomeP>
                    </HomeExplain>
                </Link>
                <Link to="/location">
                    <HomeExplain style={{marginLeft: "1%", marginTop: "3vw"}}>
                        <img src={locationIcon} alt="location-icon" style={{
                            width: "3.5vw",
                            height: "4vw"
                        }} />
                        <HoverHomeP>
                            주변에 있는 약국의 위치를 검색할 수 있어요.<br />
                            위급한 상황 발생 시 자신과 가까운 위치의 약국을 찾을 수 있어요.
                        </HoverHomeP>
                    </HomeExplain>
                </Link>
            </HomeContainer>
            {/* <ButtonLogin buttonText="약 보러 가기" linkTo="/pills" /> */}
        </div>
    )
}

export default Home
