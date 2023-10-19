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
    position: ${(props) => (props.login ? "fixed" : "relative")};
    bottom: 0;
    left: 0;

    img {
        width: 33.333rem;
    }
`;

const Footer = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login";

    return (
        <FooterDiv login={isLogin}>
            <img src={mediFooter} alt="footer" />
        </FooterDiv>
    );
};

export default Footer;
