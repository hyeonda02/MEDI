import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";



const StyleItem = styled.div`
    width: 100%;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    padding: 1vw 1vw 1vw 0;
    margin-top: -1vw;
    background-color: ${colors.subBlue};
    flex-direction: row;
    justify-content: space-between;
`;


const CalcResultP = styled.p`
    
    color: ${colors.black};
    font-size: 1vw;

`
const CalcTitleRightP = styled.p`
    font-size: 1.2vw;
`;


const ItemResult = ({id, type1, title, type2, explain}) => {
    return(
        <StyleItem key={id}>
            <div style={{ padding: "0 2vw", backgroundColor: "white", width: "10vw", height: "9vw", borderRadius: "1vw"  }}>
                <CalcResultP style={{ fontWeight: "bold", fontSize: "1.5vw",display:"flex",alignItems:"center", width:"100%",textAlign:"center", justifyContent:"center" }}>
                    {type1}<br></br>+ <br></br>{type2}
                </CalcResultP>
            </div>
            <div style={{ fontWeight: "bold", padding: "0 2vw", backgroundColor: "white", width: "60vw", height: "9vw", borderRadius: "1vw", marginLeft: '0.5vw'}}>
                <CalcTitleRightP style={{ fontWeight: "bold", color: title === '"적절함"' ? 'green' : 'red' }}>{title}</CalcTitleRightP>
                <CalcResultP>{explain}</CalcResultP>
            </div>

        </StyleItem>

    );
};
export default ItemResult;