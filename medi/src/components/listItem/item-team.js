import React from 'react';
import styled from "styled-components";
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

const GitLink = styled.a`
    text-decoration: underline;
    color: ${colors.white};
    &: hover {
        color: ${colors.mainBlue};
    }
`;

const ItemTeam = ({ id, name, number, track, role, git, img }) => { 
    return (
        <StyleItem key={id}>
            <Image src={img} alt={name} />
            <Member>
                <div style={{display: "flex", alignItems: "center", gap: "1vw"}}>
                    <TeamP style={{fontSize: "1.2vw"}}>{number} {name}</TeamP>
                    <TeamP style={{fontSize: "0.8vw"}}>{track}</TeamP>
                </div>
                <div>
                    <TeamP style={{fontWeight: "normal"}}>{role}</TeamP>
                    <div style={{display: "flex", alignItems: "center", gap: "0.5vw", marginTop: "-1.5vw"}}>
                        <TeamP style={{fontWeight: "normal"}}>Github: </TeamP>
                        <GitLink href={git} target="_blank" rel="noopener noreferrer"><TeamP>{git}</TeamP></GitLink>
                    </div>
                </div>
            </Member>
        </StyleItem>
    );
};


export default ItemTeam;
