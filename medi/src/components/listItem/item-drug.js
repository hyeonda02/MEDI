import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    width: 12vw;
    min-height: 16vw;
    border: none;
    background-color: ${colors.mainBlue};
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:600px) {
        width: 18vw;
        min-height: 21vw;
    }
`

const ItemContainer = styled.div`
    display: flex;
    gap: 0.3vw;
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 90%;
        height: 18rem;
        margin-bottom: 1vw;
        margin-top: 1vw;

        @media screen and (max-width:1000px) {
            width: 90%;
            height: 16rem;
        }
    }
`

const ItemDrug = (props) => {
    const { img, type, company } = props;

    return (
        <StyleItem>
            <ItemContainer>
                <div style={{
                    width: "0.5rem",
                    height: "4rem",
                    backgroundColor: colors.white
                }} />
                <p style={{
                    color: colors.white,
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                }}>{company}<br />{type}</p>
            </ItemContainer>

            <ImageContainer>
                <img src={img} alt="drug" />
            </ImageContainer>
            {console.log(img)}
        </StyleItem>
    )
}

export default ItemDrug;
