import { styled } from "styled-components";
import colors from "../../styles/colors";

const LocButton = styled.button`
    width: 10vw;
    height: 4vw;
    background-color: #191B24;
    border-radius: 3vw;
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

const ButtonLocation = ({ buttonText, onSubmit }) => {
    const handleClick = () => {
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <LocButton onClick={handleClick}>
            <p>{buttonText}</p>
        </LocButton>
    );
}

export default ButtonLocation;