import React, { useState, useEffect } from "react";
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
    font-size: 2rem;
    font-weight: 500;
`
const SearchContentP = styled.p`
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: 400;

`
const Image = styled.img`
    width: 8rem;
    height: 8rem;
`
const LocationInfoMation = styled.div`
    margin-top: 2vw;
    margin-right: 40vw;
    display: flex;
    align-items: center;
`
const LocationInfoContent = styled.div`
    margin-left: 1rem;


`

const Location = () => {
    const [pharmacyInfo, setPharmacyInfo] = useState([]);
    // 약국 정보를 업데이트하는 함수
    const handlePharmacyInfoChange = (data) => {
        setPharmacyInfo(data);
    };
      // useEffect를 사용하여 데이터를 가져와서 약국 정보를 설정
    useEffect(() => {
        const fetchData = async () => {
        try {
            // 데이터를 가져오는 비동기 작업을 수행
            const response = await fetch("API_URL_HERE");
            const data = await response.json();

            // 가져온 데이터를 사용하여 약국 정보를 설정
            setPharmacyInfo(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
    }, []); 
    
    return (

        <div className="Location" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5vw"
        }}>
            <Kakao onPharmacyInfoChange={handlePharmacyInfoChange}></Kakao>

            <LocSearchContainer>
                <LocInput></LocInput>
                <LocButton buttonText="찾기" type="location"/>
            </LocSearchContainer>

            {pharmacyInfo.map((pharmacy, index) => (
                <LocationInfoMation key={index}>
                    <Image src={locationMark} alt="locationMark" />
                    <LocationInfoContent>
                        <SearchInfoP>{pharmacy.name}</SearchInfoP>
                        <SearchContentP>{pharmacy.address}</SearchContentP>
                    </LocationInfoContent>
                </LocationInfoMation>
            ))}

        </div>

    );
};

export default Location;
