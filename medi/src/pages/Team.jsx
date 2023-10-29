import React, {useEffect, useState} from 'react';
import colors from "../styles/colors";
import styled from "styled-components";
import ListTeam from "../components/list/list-team";
import TeamData from "../util/team";
import team from "../assets/images/team.png";

const TeamP = styled.p`
  color: ${colors.white};
  font-size: 1vw;
  font-weight: bold;
`

const Team = () => {
    const [teamData, setTeamData] = useState(TeamData);
  
    useEffect(() => {
        setTeamData(TeamData);
    }, []);

  return (
    <div style={{width: "100%"}}>
      <TeamP style={{ textAlign: "right", marginRight: "2.5vw"}}>웹프레임워크1 N반, 박승현 교수님</TeamP>
      <img src={team} alt="team" style={{width: "100%", height: "25vw"}}/>
      <div className="teamTitle" style={{display: "flex", alignItems: "center", gap: "1vw",  marginLeft: "3vw", marginTop: "1.5vw"}}>
        <div style={{width: "0.4vw", height:"3vw", backgroundColor: colors.white}}/>
        <div className="teamExplain">
          <TeamP style={{fontSize: "1.2vw"}}>form_미쳤다 팀원 소개</TeamP>
          <TeamP style={{marginTop: "-0.8vw", fontWeight: "normal"}}>"개발하는 폼 미쳤다"</TeamP>
        </div>
      </div>

      <ListTeam data={teamData} />
      
    </div>
  )
}

export default Team
