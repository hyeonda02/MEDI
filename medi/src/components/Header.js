import React from 'react'
import ButtonTeam from "./button/button-team";
import ButtonLogin from "./button/button-login";
import colors from "../styles/colors";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderNavBar = styled.div`
    width: 100vw;
    height: 10vh;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Header = () => {
    const HeaderPStyle = {
        color: colors.mainBlue,
        marginLeft: "2.5vw",
        fontSize: "4rem",
        fontWeight: "bold"
    }
    const HeaderStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "1vw",
        marginRight: "2.5vw",
    }

    return (
        <HeaderNavBar>
            <Link to ="/">
                <p style={HeaderPStyle}>MEDI:</p>
            </Link>
            <div style = {HeaderStyle}>
                <ButtonTeam/>
                <ButtonLogin buttonText="LOGIN" linkTo="/login" />
            </div>
        </HeaderNavBar>
    )
}

export default Header
