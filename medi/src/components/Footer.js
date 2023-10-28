import { useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import mediFooter from "../assets/images/footer.png";

const FooterDiv = styled.div`
    width: 100vw;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray};
    position: ${({ login }) => (login ? "fixed" : "relative")};
    bottom: 0;
    left: 0;
    margin-top: 10rem;

    & img {
        width: 33.333rem;
    }

    @media (max-width: 1300px) {
        ${({ isSign }) =>
        isSign && 
        `
            position: fixed;
            bottom: 0;
        `}
    }

    @media (max-width: 630px) {
        ${({ isTeam }) =>
        isTeam && 
        `
            position: fixed;
            bottom: 0;
        `}
    }
`;

const Footer = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const isSign = location.pathname === "/signup";
    const isTeam = location.pathname === "/team";

    return (
        <FooterDiv login={isLogin} isSign={isSign} isTeam={isTeam}>
        <img src={mediFooter} alt="footer" />
        </FooterDiv>
    );
};

export default Footer;
