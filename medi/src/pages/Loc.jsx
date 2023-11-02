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
    const handlePharmacyInfoChange = (data) => {
        setPharmacyInfo(data);
    };

    useEffect(() => {
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
                <LocInput></LocInput>
                <LocButton buttonText="찾기" type="location"/>
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
