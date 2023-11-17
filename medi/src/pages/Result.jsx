import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import colors from "../styles/colors";
import ListSelect from "../components/list/list-select";
import ListResult from '../components/list/list-result';
import mediLogo from "../assets/images/mediLogo.png";
import medi from "../assets/images/medi.png";
import { useLocation } from 'react-router-dom';
import CombinationData from '../util/combination';

const SelectContainer = styled.div`
    width: 50%;
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
    margin-top: 5vw;
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
    const [selectedDataCalcs, setSelectedDataCalcs] = useState([]);
    const [selectedDataCombi, setSelectedDataCombi] = useState([]);
    const location = useLocation();


    useEffect(() => {
        const calcs = location.state.selectCalcs;
        setSelectedDataCalcs(calcs);
        console.log("선택된 약 항목들" + calcs);
        const combinationCalcs = [];
        calcs.forEach(selectedItem => {
            CombinationData.forEach(item => {
                if (selectedItem.type === item.type1 && !combinationCalcs.some(existingItem => existingItem.id === item.id)) {
                    combinationCalcs.push(item);
                }
            });
        });
        console.log("선택된 약 항목들 조합", JSON.stringify(combinationCalcs, null, 2));

        const filteredCombicationCalcs = combinationCalcs.filter(item => calcs.some(selectedItem => selectedItem.type === item.type2));
        console.log("필터링한 약 항목들의 조합 : ",JSON.stringify(filteredCombicationCalcs, null, 2));
        setSelectedDataCombi(filteredCombicationCalcs);

    }, [location.state.selectCalcs]);


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            <SelectContainer>
                <div style={{display: "flex", alignItems: "center", gap: "1vw", marginTop: "2vw"}}>
                    <ResultBar/>
                    <CalcResultP>혼합된 약의 리스트</CalcResultP>
                </div>
                    <ListSelect data={selectedDataCalcs}/>
            </SelectContainer>

            <ResultContainer>
                <img src={mediLogo} alt="mediLogo" style={{
                    width: "3rem", 
                    height: "3rem", 
                    paddingTop: "3vw"
                }}/>
                <CalcResultP style={{marginTop: "1rem"}}>영양제 종류</CalcResultP>
                <div style={{width: "80%", height: "0.5vw", backgroundColor: colors.white}}/>

                <div style={{width: "80%", display: "flex", marginTop: "1.5vw"}}>
                    <div className="left" style={{ width: "25%", display: "flex", flexDirection: "column"}}>
                        <DoctorContainer>
                            <img src={medi} alt="medi" style={{width: "12vw", height: "12vw"}}/>
                            <div style={{display: "flex", alignItems: "center", width: "100%", gap: "0.5vw", marginTop: "2.5vw"}}>
                                <ResultBar style={{marginLeft: "2vw", height: "50%"}}/>
                                <CalcResultP style={{fontWeight: "bold", fontSize: "1vw"}}>담당 의료진<br/>"MEDI:"</CalcResultP>
                            </div>
                        </DoctorContainer>
                    </div>
                    <div className="right" style={{width: "75%", marginBottom:"5%"}}>

                        <CalcResultP style={{fontWeight: "bold",  fontSize: "1vw"}}>약 조합의 설명을 한 눈에 보여드릴게요.<br/>이곳에 나타나지 않는 조합들은 안심하고 같이 복용해도 된답니다!</CalcResultP>

                        <ListResult data  ={selectedDataCombi}/>

                    </div>
                </div>
            </ResultContainer>
        </div>
    )
}

export default CalcResult;