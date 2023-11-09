import React, { useState } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    width: 12vw;
    min-height: 16vw;
    border: none;
    background-color: ${colors.black};
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:600px) {
        width: 18vw;
        min-height: 21vw;
    }
`


const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 90%;
        height: 10vw;
        margin: 1vw 0 1vw 0;

        @media (max-width: 600px) {
            height: 17vw;
        }
    }
`;

 const ItemContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex: 0 0 12.5%;
  box-sizing: border-box;
  position: relative;
  background-color: #000000;
  border-radius: 3px;

  &:hover {
    .MovieDetail {
      display: block;
    }
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        height: 17vw;
  }
`;

const StyledParagraph = styled.p`
  color: ${colors.white};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const PillsModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  color: white;
  padding: 5px;
  font-size: 15px;
  color: ${colors.white};
`;



const DrugListItem = (props) => {
    const { id, img, type, company,name, modalExplain} = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyleItem key={id}>
          <ImageContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={img} alt="drug" />
          </ImageContainer>
          <ItemContainer>
        <StyledParagraph>
          {company}
          <br />
          {type}
        </StyledParagraph>
            {isHovered && (
              <PillsModal>
                <h4>{name}</h4>
                <p>{modalExplain}</p>
              </PillsModal>
            )}
          </ItemContainer>
        </StyleItem>
      );
      
}

export default DrugListItem;
