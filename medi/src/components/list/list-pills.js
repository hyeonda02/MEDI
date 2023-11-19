import styled from "styled-components";
import DrugListItem from "../listItem/item-pills";

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 2vw;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PillsList = ({ data, selectedType, selectedExplain }) => {
  const filteredData = selectedType
    ? data.filter(
        (item) =>
          item.selectType === selectedType ||
          item.selectExplain === selectedExplain
      )
    : data;

  return (
    <StyleGrid>
      {filteredData.map((item, index) => (
        <DrugListItem
          key={index}
          id={item.id}
          img={require(`../../assets/${item.image}`)}
          company={item.company}
          type={item.type}
          name={item.name}
          modalExplain={item.modalExplain}
          modalImage1={require(`../../assets/${item.modalImage1}`)}
          modalImage2={require(`../../assets/${item.modalImage2}`)}
          modalImage3={require(`../../assets/${item.modalImage3}`)}
          modalImage4={require(`../../assets/${item.modalImage4}`)}
        />
      ))}
    </StyleGrid>
  );
};

export default PillsList;
