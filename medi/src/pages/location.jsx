import React from "react";
import { styled } from "styled-components";

import Kakao from "../api/Kakao";
import LocInput from "../components/input/input-Loc";
import LocButton from "../components/button/button-Loc";


const LocSearchContainer = styled.div`
    margin-top: 5vw;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
const SearchResult = styled.div`
    margin-top: 5vw;
    flex-direction: column;

`
const searchInfo = styled.div`
    margin-top: 1vw;
    font-size: 2rem;
    font-weight: 800;

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
                <LocButton buttonText="찾기" type="submit"/>
            </LocSearchContainer>
            <SearchResult>
                <ul>
                    <searchInfo>
                        1.=이름이름이름=
                        주소: 주소주소주소주소주소
                    </searchInfo>
                    <searchInfo>
                        2.=이름이름이름=
                        주소: 주소주소주소주소주소
                    </searchInfo>
                    <searchInfo>
                        3.=이름이름이름=
                        주소: 주소주소주소주소주소
                    </searchInfo>
                </ul>
            </SearchResult>
        </div>

    );
};

export default Location;
