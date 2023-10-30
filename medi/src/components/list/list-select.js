import styled from "styled-components";
import ItemSelect from "../listItem/item-select";

const StyleGrid = styled.div`

`

const ListSelect = ({data}) => {
    return (
        <StyleGrid>
            {data.map((item, index) => {
                return (
                    <ItemSelect
                        key = {index}
                        img={require(`../../assets/${item.image}`)}
                        type = {item.type}
                        explain = {item.explain}
                    />
                )
            })}
        </StyleGrid>
    )
}

export default ListSelect;