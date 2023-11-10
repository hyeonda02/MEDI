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
const LocationInfoMation = styled.ul`
    margin-top: 2vw;
    display: flex;
    align-items: center;
    margin-right:50vw;
`
const LocationInfoContent = styled.div`
    margin-left: 0.5vw;
`
const Infolist = styled.li`
`

const Location = () => {
    const [pharmacyInfo, setPharmacyInfo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [center, setCenter] = useState({});


    const handleInputValue = value => {
        setInputValue(value);
        console.log("인풋 필드 갱신 : ", value);
    }
    const submit = () => {
        if (inputValue) {
            // 예를 들어, inputValue가 주소라고 가정하고 이를 경위도 좌표로 변환하는 로직을 추가
            // 경위도 좌표 계산 로직 추가
            const latitude = 33.450701; // 위도
            const longitude = 126.570667; // 경도
            console.log(`${latitude},${longitude}`);
            setCenter({ latitude, longitude }); // center 상태 업데이트
        }
    };
    
    const handlePharmacyInfoChange = data => {
        setPharmacyInfo(data);
    };

    useEffect(() => {
        console.log("테스트용 콘솔 찍기");
        const fetchData = async () => {
            try {
                const response = await fetch("49738cc210b9e6c7d60c49f5d00321ce", {
                    headers: {
                        "Accept": "application/json",
                    },
                });
                
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setPharmacyInfo(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [])
    
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
                <LocInput value={inputValue} placeholder="지역을 입력해주세요" onInputChange={handleInputValue} />
                <LocButton buttonText="찾기" type="location" onClick={submit} />
            </LocSearchContainer>

            <li className="Infolist">
                {pharmacyInfo.map((pharmacy, index) => (
                    <LocationInfoMation key={index}>
                        <Image src={locationMark} alt="locationMark" />
                        <LocationInfoContent>
                            <SearchInfoP>{pharmacy.name}</SearchInfoP>
                            <SearchContentP>{pharmacy.address}</SearchContentP>
                        </LocationInfoContent>
                    </LocationInfoMation>
                ))}
            </li>
        </div>

    );
};

export default Location;
