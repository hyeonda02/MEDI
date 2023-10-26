import React from "react";
import colors from "../styles/colors";
import styled from "styled-components";
import Kakao from "../components/location/Kakao";
import LocInput from "../components/input/input-Loc";
import LocButton from "../components/button/button-Loc";

const LocExplainContainer = styled.div`
`
const LocSearchContainer = styled.div`
    margin-top: 15rem;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
const SearchResult = styled.div`

    
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


            <LocExplainContainer>
                <Kakao></Kakao>
                <LocSearchContainer>
                    <LocInput></LocInput>
                    <LocButton buttonText="찾기" type="submit"/>
                </LocSearchContainer>
                <SearchResult>
                    
                </SearchResult>

            </LocExplainContainer>
        </div>

    );
};

export default Location;
