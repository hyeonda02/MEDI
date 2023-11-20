import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
  width: 100%;
  min-height: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 5vw;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 90%;
    height: 10vw;
    margin: 1vw 0 1vw 0;
  }

  &:hover img {
    transform: scale(1.5);
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  color: ${colors.white};
  font-size: 0.8vw;
  font-weight: bold;
  margin: 0px;
`;

const StyledParagraph = styled.p`
  .name {
    font-size: 1.2vw;
  }
`;

export const PillsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 2vw;
  border-radius: 5vw;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 50%;
  text-align: left;
  z-index: 999;
  letter-spacing: 0.3vw;
  font-size: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    padding: 2rem;
  }

  .close-button {
    position: absolute;
    top: 3vw;
    right: 3vw;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 3rem;

    @media screen and (max-width: 600px) {
      .close-button {
        padding: 10px 10px;
        font-size: 2rem;
        top: 5px;
        right: 5px;
      }
    }
  }
`;

const ScrollableContent = styled.div`
  max-height: 60vh; 
  overflow-y: auto; 

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.lightgray};
    border-radius: 5px;
`;

const ResponsiveImage = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: 15%;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

// 각각의 약품을 나타내는 컴포넌트
const DrugListItem = (props) => {
  const {
    id,
    img,
    company,
    name,
    modalExplain,
    modalImage1,
    modalImage2,
    modalImage3,
    modalImage4,
  } = props;

  // 모달 열림 상태를 관리하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //마침표를 기준으로 문단 나누기
  const formattedModalExplain = modalExplain
    .split(".")
    .map((paragraph, index, array) => (
      <p key={index}>
        {index === array.length - 1 ? paragraph.trim() : paragraph.trim() + "."}
      </p>
    ));

  return (
    <StyleItem key={id}>
      {/* 이미지 클릭 시 모달 열기 */}
      <ImageContainer onClick={openModal}>
        <img src={img} alt="drug" />
      </ImageContainer>
      {/* 약품 정보를 나타내는 상자 */}
      <ItemContainer>
        <StyledParagraph>
          <span className="company">{company}</span>
          <br></br>
          <span className="name">{name}</span>
        </StyledParagraph>
      </ItemContainer>
      {/* 모달이 열려있을 때 */}
      {isModalOpen && (
        <>
          {/* 약품 정보를 나타내는 모달 */}
          <PillsModal>
            <h4 style={{ fontSize: "3rem", fontWeight: "bold" }}>{name}</h4>
            {/* 스크롤 가능한 내용 */}
            <ScrollableContent>
              <p style={{ fontWeight: "bold" }}>{formattedModalExplain}</p>
              <br />
              {/* 반응형 이미지 */}
              <ResponsiveImage>
                <img src={modalImage1} alt="food" />
                <img src={modalImage2} alt="food" />
                <img src={modalImage3} alt="food" />
                <img src={modalImage4} alt="food" />
              </ResponsiveImage>
            </ScrollableContent>
            <br />
            {/* 모달 닫기 버튼 */}
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
          </PillsModal>
          <StyledOverlay onClick={closeModal} />
        </>
      )}
    </StyleItem>
  );
};

export default DrugListItem;
