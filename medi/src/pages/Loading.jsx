import React from 'react';
import colors from "../styles/colors";
import { styled } from "styled-components";
import mediCharacter from "../assets/images/mediCharacter.png";


const LoadBannerP1 = styled.p`
    color: ${colors.white};
    font-size: 2.5vw;
    font-weight: bold;
`
const LoadBannerP2 = styled.p`
    color: ${colors.white};
    font-size: 2vw;
    margin-top: -0.5rem;
`

const LoadExplainContainer = styled.div`
    width: 70%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
`
const LoadExplain = styled.div`
    gap: 2vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const UserImage = styled.img`
    width: 40%;
    height: auto;
`

const Loading = () => {
    return (

        <div className="Loading" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <LoadExplainContainer>
                <LoadExplain>
                    <UserImage src={mediCharacter} alt="mediCharacter"/>
                    <LoadBannerP1>MEDI:가 영양제의 성분을 계산하고 있어요!</LoadBannerP1>
                    <LoadBannerP2>잠시만 기다려주세요</LoadBannerP2>
                </LoadExplain>
            </LoadExplainContainer>

        </div>

        
    )
}


export default Loading