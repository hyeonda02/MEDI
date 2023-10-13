import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const NavButton = styled.div`
    width: 13.8rem;
    height: 4.4rem;
    background-color: ${colors.black};
    border: none;
    color: ${colors.white};
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${colors.mainBlue};
    }
`

const ButtonNav = ({ buttonText, linkTo }) => {
    return (
        <Link to={linkTo}>
            <NavButton>
                <p>{buttonText}</p>
            </NavButton>
        </Link>
    );
};

export default ButtonNav;