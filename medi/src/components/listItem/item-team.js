import React from 'react';
import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    margin-top: 8vw;
    margin-left: 10vw;
`;

const Image = styled.img`
    width: 12vw;
    height: 12vw;
`;

const TeamP = styled.p`
    color: ${colors.white};
    font-size: 1vw;
    font-weight: bold;
`

const Member = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -3vw;
`

const ItemTeam = ({ id, name, track, role, ambition, img }) => { 
    return (
        <StyleItem key={id}>
            <Image src={img} alt={name} />
            <Member>
                <TeamP style={{fontSize: "1.2vw"}}>{track} {name}</TeamP>
                <div>
                    <TeamP>{role}</TeamP>
                    <TeamP style={{marginTop: "-0.5vw"}}>{ambition}</TeamP>
                </div>
            </Member>
        </StyleItem>
    );
};


export default ItemTeam;
