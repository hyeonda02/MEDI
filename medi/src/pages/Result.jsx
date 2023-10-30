import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import colors from "../styles/colors";
import ListSelect from "../components/list/list-select";
import DrugData from "../util/drug";
import mediLogo from "../assets/images/mediLogo.png";
import medi from "../assets/images/medi.png";

const SelectContainer = styled.div`
    width: 70%;
`
const ResultBar = styled.div`
    width: 0.3vw;
    height: 1.5vw;
    background-color: ${colors.white};
`

const CalcResultP = styled.p`
    color: ${colors.white};
    font-size: 0.8vw;
`

const ResultContainer = styled.div`
    width: 100%;
    background-color: ${colors.subBlue};
    margin-top: 2.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DoctorContainer = styled.div`
    width: 80%;
    border: 0.5vw solid ${colors.white};
    border-radius: 1.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw 0 1vw 0;
`

const PatientContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Patient = styled.div`
    width: 47%;
    border-radius: 0.5vw;
    border: 0.5vw solid ${colors.white};
    display: flex;
    align-items: center;
`

const CalcResult = () => {
    const [drugData, setDrugData] = useState(DrugData);
    const [slicedData, setSlicedData] = useState([]);

    useEffect(() => {
        setDrugData(DrugData);
    }, []);

    useEffect(() => {
        setSlicedData(drugData.slice(0, 5));
    }, [drugData]);

    useEffect(() => {
        setDrugData(DrugData);
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            <SelectContainer>
                <div style={{display: "flex", alignItems: "center", gap: "1vw", marginTop: "2vw"}}>
                    <ResultBar/>
                    <CalcResultP>혼합된 약의 리스트</CalcResultP>
                </div>
                {drugData.length > 0 && 
                    <ListSelect data={slicedData}/>
                }
            </SelectContainer>

            <ResultContainer>
                <img src={mediLogo} alt="mediLogo" style={{
                    width: "3rem", 
                    height: "3rem", 
                    paddingTop: "3vw"
                }}/>
                <CalcResultP style={{marginTop: "1rem"}}>영양제 종류</CalcResultP>
                <div style={{width: "90%", height: "0.5vw", backgroundColor: colors.white}}/>

                <div style={{width: "90%", display: "flex", marginTop: "1.5vw"}}>
                    <div className="left" style={{ width: "25%", display: "flex", flexDirection: "column"}}>
                        <DoctorContainer>
                            <img src={medi} alt="medi" style={{width: "12vw", height: "12vw"}}/>
                            <div style={{display: "flex", alignItems: "center", width: "100%", gap: "0.5vw", marginTop: "2.5vw"}}>
                                <ResultBar style={{marginLeft: "2vw", height: "50%"}}/>
                                <CalcResultP style={{fontWeight: "bold", fontSize: "1vw"}}>담당 의료진<br/>"MEDI:"</CalcResultP>
                            </div>
                        </DoctorContainer>
                    </div>
                    <div className="right" style={{backgroundColor: "blue", width: "75%"}}>
                        <PatientContainer>
                            <Patient>
                                <CalcResultP style={{marginLeft: "3vw", fontWeight: "bold", fontSize: "1vw"}}>환자명</CalcResultP>
                                <ResultBar style={{height: "100%", marginLeft: "3vw"}}/>
                                <CalcResultP style={{marginLeft: "2vw", fontWeight: "bold", fontSize: "1vw"}}>강다현</CalcResultP>
                            </Patient>
                            <Patient>
                                <CalcResultP style={{marginLeft: "3vw", fontWeight: "bold", fontSize: "1vw"}}>생년월일</CalcResultP>
                                <ResultBar style={{height: "100%", marginLeft: "3vw"}}/>
                                <CalcResultP style={{marginLeft: "2vw", fontWeight: "bold", fontSize: "1vw"}}>2023.10.31</CalcResultP>
                            </Patient>
                        </PatientContainer>
                        <CalcResultP style={{fontWeight: "bold", marginTop: "2vw", fontSize: "1vw"}}>약 조합의 설명을 한 눈에 보여드릴게요.</CalcResultP>
                    </div>
                </div>
            </ResultContainer>
        </div>
    )
}

export default CalcResult;
