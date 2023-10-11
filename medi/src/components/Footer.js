import { styled } from "styled-components";
import colors from "../styles/colors";
import mediFooter from "../assets/images/footer.png";

const FooterDiv = styled.div`
    width: 100vw;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray};

    img{
        width: 33.333rem;
    }
`

const Footer = () => {
    return (
        <FooterDiv>
            <img
                src={mediFooter}
                alt="footer"
            />
        </FooterDiv>
    )
}

export default Footer