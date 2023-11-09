import styled from "styled-components";
import DrugListItem from "../listItem/item-pills";

const StyleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 6개의 열을 동일한 너비로 설정*/
    justify-content: center; /*수평 가운데 정렬*/
    align-items: center;
    gap: 4rem;

    /* 화면 너비가 600px 이하일 때 아래 스타일을 적용*/
    @media screen and (max-width:600px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }
`

const PillsList = ({data}) => {
    return (
        <StyleGrid>
            {data.map((item, index) => {
                return (
                    <DrugListItem
                        key = {index}
                        id = {item.id}
                        img={require(`../../assets/${item.image}`)}
                        company = {item.company}
                        type = {item.type}
                        name={item.name}
                        modalExplain={item.modalExplain}
                    />
                )
            })}
        </StyleGrid>
    )
}


export default PillsList;