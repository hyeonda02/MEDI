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
    position: ${({ islogin }) => (islogin === "true" ? "fixed" : "relative")};
    bottom: 0;
    left: 0;
    margin-top: 10rem;

    & img {
        width: 33.333rem;
    }

    @media (max-width: 650px) {
        ${({ isteam }) =>
        isteam === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    }

    @media (max-width: 1250px) {
        ${({ issign }) =>
        issign === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    }
`;


const Footer = () => {
    const location = useLocation();
    const islogin = location.pathname === "/login";
    const isteam = location.pathname === "/team";
    const issign = location.pathname === "/signup";

    return (
        <FooterDiv islogin={islogin.toString()} isteam={isteam.toString()} issign={issign.toString()}>
            <img src={mediFooter} alt="footer" />
        </FooterDiv>
    );
};



export default Footer;
