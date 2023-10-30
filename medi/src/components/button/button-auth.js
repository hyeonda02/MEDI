import styled from "styled-components";
import colors from "../../styles/colors";

const ButtonAuth = styled.button`
    width: 100%;
    height: 4vw;
    background-color: ${colors.mainBlue};
    border: none;
    border-radius: 0.5vw;
    font-size: 2vw;
    align-items: center;
    justify-content: center;
    display: flex;
    font-weight: bold;
    color: ${colors.black};
    margin-top: 3vw;

    &:hover {
        color: ${colors.white};
    }
`

const AuthButton = ({ buttonText, onClick }) => {
    return (
        <ButtonAuth type="submit" onClick={onClick}>
            <p>{buttonText}</p>
        </ButtonAuth>
    )
}


export default AuthButton