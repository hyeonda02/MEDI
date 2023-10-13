import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    width: 11vw;
    min-height: 16vw;
    border: none;
    background-color: ${colors.mainBlue};
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:600px) {
        width: 16vw;
        min-height: 21vw;
    }
`

const ItemContainer = styled.div`
    display: flex;
    gap: 0.2vw;
    align-items: center;
    padding-left: 1vw;
`

const ItemDrug = (props) => {
    const {img, name} = props;

    return (
        <StyleItem>
            <ItemContainer>
                <div style={{
                    width: "0.5rem", 
                    height:"2rem", 
                    backgroundColor: colors.white
                }}/>
                <p style={{
                    color: colors.white, 
                    fontSize:"2rem", 
                    fontWeight: "bold"
                }}>{name}</p>
            </ItemContainer>
            
            <img src={img} alt="drug" style={{
                width: "100%",
                height: "80%",
            }}/>
            {console.log(img)}
        </StyleItem>
    )
}

export default ItemDrug;