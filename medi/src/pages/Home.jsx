import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import colors from "../styles/colors";
import { styled } from "styled-components";
import ListDrug from "../components/list/list-drug";
import DrugData from "../util/drug";
import homeBanner from "../assets/images/homeBanner.png";
import user from "../assets/images/user.png";
import medi from "../assets/images/medi.png";
import mediLogo from "../assets/images/mediLogo.png";
import calcIcon from "../assets/images/calc-icon.png";
import locationIcon from "../assets/images/location-icon.png";
import homeDown from "../assets/images/home-down.png";

// const HomeBannerP = styled.div`
//     width: 100%;
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     justify-content: center;
//     top: 35rem;
// `
const HomeBannerP1 = styled.p`
    color: ${colors.white};
    font-size: 2rem;
`
const HomeBannerP2 = styled.p`
    color: ${colors.white};
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: -0.5rem;
`
const HoverHomeBannerP1 = styled(HomeBannerP1)`
    &:hover {
        color: ${colors.mainBlue};
    }
`;

const HomeExplainContainer = styled.div`
    width: 80%;
    margin-top: 5rem;
`
const HomeExplain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2vw;
`
const UserImage = styled.img`
    width: 13rem;
    height: 13rem;
`
const HomeExplainBar = styled.div`
    width: 0.5rem;
    height: 10rem;
    background-color: ${colors.white};
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
const HomeMiddleContainer = styled.div`
    padding-top: 2vw;
    padding-bottom: 1vw;
    display: flex;
    justify-content: space-between;
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
    const [drugData, setDrugData] = useState([]);
    const [slicedData, setSlicedData] = useState([]);

    useEffect(() => {
        setDrugData(DrugData);
    }, []);

    useEffect(() => {
        const shuffledData = shuffleArray(drugData);
        const selectedData = shuffledData.slice(0, 12);
        setSlicedData(selectedData);
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
                height: "30vw", 
                marginTop:"3rem"
            }}/>

            {/* <HomeBannerP>
                <HomeBannerP1>MEDI:는 약의 성분을 비교하여<br/>
                더 안전한 복용을 위한
                <span style={{ fontWeight: "bold" }}> 의약품 정보 제공 서비스</span>입니다.</HomeBannerP1>
                <HomeBannerP2>"더 건강한 선택, MEDI:"</HomeBannerP2>
            </HomeBannerP> */}

            <HomeExplainContainer>
                <HomeExplain>
                    <UserImage src={user} alt="user"/>
                    <HomeExplainBar/>
                    <div className="HomeExplainContainer">
                        <HomeBannerP1>임산부라 약을 먹을 때 조심해야 하는데..</HomeBannerP1>
                        <HomeBannerP2 style={{fontSize: "2.1rem"}}>
                            "약에 어떤 성분이 있는지 모르겠어요"<br/>
                            "복용할 약 종류가 많은데 함께 먹어도 괜찮을까요?"
                        </HomeBannerP2>
                    </div>
                </HomeExplain>
                <HomeExplain style={{justifyContent: "flex-end"}}>
                    <div className="HomeExplainContainer">
                        <HomeBannerP1 style={{textAlign: "right"}}>
                            의사와 상담을 추천드리지만, 병원에 가기 어렵다면 MEDI:가 도움 드리겠습니다.
                        </HomeBannerP1>
                        <HomeBannerP2 style={{ textAlign: "right", fontSize: "2.1rem" }}>
                            "MEDI: 알약 정보 제공으로 성분을 쉽게 확인하세요"<br />
                            "MEDI: 성분 계산으로 여러 종류의 약을 혼합해보세요."
                        </HomeBannerP2>
                    </div>
                    <HomeExplainBar />
                    <UserImage src={medi} alt="user" />
                </HomeExplain>
            </HomeExplainContainer>

            <HomeMiddle>
                <img src={mediLogo} alt="mediLogo" style={{
                    width: "3rem", 
                    height: "3rem", 
                    paddingTop: "4vw"
                }}/>
                <HomeBannerP1 style={{marginTop: "0.5rem"}}>영양제 종류</HomeBannerP1>
                <div style={{width: "90%", height: "0.5vw", backgroundColor: colors.white}}/>
                
                <HomeMiddleContainer>
                    {drugData.length > 0 &&
                        <ListDrug data={slicedData} />
                    }
                </HomeMiddleContainer>
                
                <Link to="/pills">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <HoverHomeBannerP1 style={{ fontSize: "1.8rem" }}>더보기</HoverHomeBannerP1>
                        <img src={homeDown} alt="homeDown" style={{
                            width: "2rem",
                            marginTop: "-2rem",
                            marginBottom: "2rem"
                        }}/>
                    </div>
                </Link>
            </HomeMiddle>

            <HomeExplainContainer style={{ width: "80%", marginTop:"4vw"}}>
                <Link to ="/calc">
                    <HomeExplain>
                        <img src={calcIcon} alt="calc-icon" style={{
                            width: "5vw",
                            height: "5vw"
                        }}/>
                        <HoverHomeBannerP1>
                            약의 성분 조합을 계산할 수 있어요.<br/>
                            여러 종류의 약을 섭취할 시 주의사항을 한 눈에 볼 수 있어요.
                        </HoverHomeBannerP1>
                    </HomeExplain>
                </Link>
                <Link to="/location">
                    <HomeExplain style={{marginLeft: "1%", marginTop: "3vw"}}>
                        <img src={locationIcon} alt="location-icon" style={{
                            width: "3.5vw",
                            height: "4vw"
                        }} />
                        <HoverHomeBannerP1>
                            주변에 있는 약국의 위치를 검색할 수 있어요.<br />
                            위급한 상황 발생 시 자신과 가까운 위치의 약국을 찾을 수 있어요.
                        </HoverHomeBannerP1>
                    </HomeExplain>
                </Link>
            </HomeExplainContainer>
            {/* <ButtonLogin buttonText="약 보러 가기" linkTo="/pills" /> */}
        </div>
    )
}

export default Home
