import { styled } from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../styles/colors";

const HomeTeamButton = styled.button`
    width: 13.8rem;
    height: 4.4rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.black};
    color: ${colors.white};
`

const ButtonTeam = () => {
    return (
        <>
            <Link to="/team">
                <HomeTeamButton>
                    <p>팀 정보</p>
                </HomeTeamButton>
            </Link>
        </>
    )
}

export default ButtonTeam;