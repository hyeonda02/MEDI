import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";

const NavButton = styled.div`
    width: 13.8rem;
    height: 4.4rem;
    background-color: ${colors.black};
    border: none;
    color: ${(props) =>
        props.isclick === "true" ? colors.mainBlue : colors.white};
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${colors.mainBlue};
    }
`;

const ButtonNav = ({ buttonText, linkTo }) => {
    const location = useLocation();
    const isclick = (location.pathname === linkTo).toString();

    return (
        <Link to={linkTo}>
            <NavButton isclick={isclick}>{buttonText}</NavButton>
        </Link>
    );
};

export default ButtonNav;
