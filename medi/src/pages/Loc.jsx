import React, { useState } from "react";
import { styled } from "styled-components";
import colors from "../styles/colors";
import locationMark from "../assets/images/location.png";
import Kakao from "../api/Kakao";
import LocInput from "../components/input/input-Loc";


const LocSearchContainer = styled.div`
  margin-top: 5vw;
  display: flex;
`;
const SearchInfoP = styled.p`
  color: ${colors.white};
  font-size: 2rem;
  font-weight: 500;
`;
const SearchContentP = styled.p`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 400;
`;
const Image = styled.img`
  width: 8rem;
  height: 8rem;
`;
const LocationInfoMation = styled.ul`
  margin-top: 2vw;
  display: flex;
  align-items: center;
  margin-right: 50vw;
`;
const LocationInfoContent = styled.div`
  margin-left: 0.5vw;
`;


const Location = () => {
  const [pharmacyInfo, setPharmacyInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = value => {  
      setInputValue(value);
  }
    
  const handlePharmacyInfoChange = data => {
      setPharmacyInfo(data);
  };

  return (
    <div
      className="Location"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5vw",
      }}
    >
      <Kakao
        inputValue={inputValue}
        onPharmacyInfoChange={handlePharmacyInfoChange}
      ></Kakao>

      <LocSearchContainer>
        <LocInput
          value={inputValue}
          placeholder="도로명 주소를 입력해주세요."
          onInputChange={handleInputValue}
        />
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
