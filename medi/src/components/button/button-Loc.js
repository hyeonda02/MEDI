import { styled } from "styled-components";
import colors from "../../styles/colors";

const LocButton = styled.button`
    width: 17rem;
    height: 6.5rem;
    background-color: #191B24;
    border-radius: 3rem;
    font-size: 2rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${colors.silver};
    border-color:${colors.white};
    &:hover {
        color: ${colors.white};
        background-color:${colors.silver};
    }
`

const ButtonLocation = ({ buttonText, linkTo }) => {
    return (
        <LocButton>
            <p>{buttonText}</p>
        </LocButton>
    )
}

export default ButtonLocation