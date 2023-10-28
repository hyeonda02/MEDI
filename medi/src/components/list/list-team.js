import { styled } from "styled-components";
import ItemTeam from "../listItem/item-team";

const StyleGrid = styled.div`

`

const ListTeam = ({data}) => {
    return (
        <StyleGrid>
            {data.map((item, index) => {
                return (
                    <ItemTeam
                        key = {index}
                        id = {item.id}
                        name = {item.name}
                        track = {item.track}
                        role = {item.role}
                        ambition = {item.ambition}
                        img={require(`../../assets/${item.image}`)}
                    />
                )
            })}
        </StyleGrid>
    )
}

export default ListTeam;