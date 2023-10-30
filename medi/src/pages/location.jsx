import React from "react";
import { styled } from "styled-components";
import colors from "../styles/colors";
import locationMark from "../assets/images/location.png";
import Kakao from "../api/Kakao";
import LocInput from "../components/input/input-Loc";
import LocButton from "../components/button/button-Loc";


const LocSearchContainer = styled.div`
    margin-top: 5vw;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
const SearchInfoP = styled.p`
    color: ${colors.white};
    font-size: 3rem;
    font-weight: 800;
`
const SearchContentP = styled.p`
    color: ${colors.white};
    font-size: 2rem;
    font-weight: 800;

`
const Image = styled.img`
    width: 8rem;
    height: 8rem;
`
const LocationInfoMation = styled.div`
    margin-top: 3vw;
    margin-right: 40vw;
    display: flex;
    align-items: center;
`
const LocationInfoContent = styled.div`
    margin-left: 1rem;
`

const Location = () => {
    return (

        <div className="Location" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5vw"
        }}>
            <Kakao></Kakao>

            <LocSearchContainer>
                <LocInput></LocInput>
                <LocButton buttonText="찾기" type="location"/>
            </LocSearchContainer>


            <LocationInfoMation>
                <Image src={locationMark} alt="locationMark"/>
                <LocationInfoContent>
                <SearchInfoP> OOO약국 </SearchInfoP>
                <SearchContentP>주소 : 주소주소주소주소주소</SearchContentP>
                </LocationInfoContent>
            </LocationInfoMation>
            <LocationInfoMation>
                <Image src={locationMark} alt="locationMark"/>
                <LocationInfoContent>
                <SearchInfoP> OOO약국 </SearchInfoP>
                <SearchContentP>주소 : 주소주소주소주소주소</SearchContentP>
                </LocationInfoContent>
            </LocationInfoMation>
            <LocationInfoMation>
                <Image src={locationMark} alt="locationMark"/>
                <LocationInfoContent>
                <SearchInfoP> OOO약국 </SearchInfoP>
                <SearchContentP>주소 : 주소주소주소주소주소</SearchContentP>
                </LocationInfoContent>
            </LocationInfoMation>
            <LocationInfoMation>
                <Image src={locationMark} alt="locationMark"/>
                <LocationInfoContent>
                <SearchInfoP> OOO약국 </SearchInfoP>
                <SearchContentP>주소 : 주소주소주소주소주소</SearchContentP>
                </LocationInfoContent>
            </LocationInfoMation>


        </div>

    );
};

export default Location;
