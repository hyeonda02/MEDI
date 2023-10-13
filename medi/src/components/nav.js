import { styled } from "styled-components";
import NavButton from "./button/nav/button-nav";

const HomeNav = styled.div`
    display: flex;
    justify-content: center;
    gap: 7vw;
    margin-top: 2vw;
`

const Nav = () => {
    return (
        <HomeNav>
            <NavButton buttonText="HOME" linkTo="/" />
            <NavButton buttonText="PILLS" linkTo="/pills" />
            <NavButton buttonText="CALC" linkTo="/calc" />
            <NavButton buttonText="LOCATION" linkTo="/location" />
        </HomeNav>
    )
}

export default Nav