import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavButton from "./button/button-nav";

const HomeNav = styled.div`
    display: flex;
    justify-content: center;
    gap: 7vw;
    margin-top: 2vw;

    @media (max-width: 950px) {
        gap: 5vw;
    }

    @media (max-width: 500px) {
        gap: 1vw;
    }
`

const Nav = () => {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/team') {
        return null;
    }

    return (
        <HomeNav>
            <NavButton buttonText="HOME" linkTo="/" />
            <NavButton buttonText="PILLS" linkTo="/pills" />
            <NavButton buttonText="CALC" linkTo="/calc" />
            <NavButton buttonText="LOCATION" linkTo="/location" />
        </HomeNav>
    )
}

export default Nav;
