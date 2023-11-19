import styled from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    width: 11.2vw;
    min-height: 16vw;
    border: none;
    background-color: ${colors.mainBlue};
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:600px) {
        width: 18vw;
        min-height: 22vw;
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
        width: 80%;
        height: 10vw;
        margin: 1vw 0 1vw 0;

        @media (max-width: 600px) {
            height: 17vw;
        }
    }
`

const ItemDrug = (props) => {
    const { id, img, type, company } = props;

    return (
        <StyleItem key={id}>
            <ItemContainer>
                <div style={{
                    width: "0.5rem",
                    height: "2vw",
                    backgroundColor: colors.white
                }} />
                <p style={{
                    color: colors.white,
                    fontSize: "1vw",
                    fontWeight: "bold"
                }}>{company}<br />{type}</p>
            </ItemContainer>

            <ImageContainer>
                <img src={img} alt="drug" />
            </ImageContainer>
        </StyleItem>
    )
}

export default ItemDrug;
