import React from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    width: 100%;
    border: none;
    border-radius: 0.8vw;
    display: flex;
    align-itmes: center;
    padding: 2vw 0 2vw 0;
    margin-top: 1vw;
    background-color: ${colors.white};
`;

const CalcResultP = styled.p`
    color: ${colors.black};
    font-size: 0.8vw;
`

const ItemSelect = ({ id, img, type, explain}) => { 
    return (
        <StyleItem key={id}>
            <img src={img} alt="img" style={{marginLeft: "2vw", width: "5vw", height: "6vw"}}/>
            <div style={{ padding: "0 2vw 0 2vw"}}>
                <CalcResultP style={{fontWeight: "bold", fontSize: "1vw"}}>{type}</CalcResultP>
                <CalcResultP>{explain}</CalcResultP>
            </div>
        </StyleItem>
    );
};


export default ItemSelect;
