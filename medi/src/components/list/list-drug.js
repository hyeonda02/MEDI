import styled from "styled-components";
import ItemDrug from "../listItem/item-drug";

const StyleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width:600px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }
`

const ListDrug = ({data}) => {
    return (
        <StyleGrid>
            {data.map((item, index) => {
                return (
                    <ItemDrug
                        key = {index}
                        img={require(`../../assets/${item.image}`)}
                        company = {item.company}
                        type = {item.type}
                    />
                )
            })}
        </StyleGrid>
    )
}

export default ListDrug;