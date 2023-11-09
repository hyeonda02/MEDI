import React, { useState } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    margin-top: 5rem;
    width: 12vw;
    min-height: 16vw;
    border: none;
    background-color: ${colors.black};
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 80%; /* Adjust as needed */
        min-height: 21vw;
    }
`;

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
    }
`;

const StyledParagraph = styled.p`
    color: ${colors.white};
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    margin: 1vw 1vw 0 0;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        font-size: 1.5rem; /* Adjust as needed */
    }
`;

export const PillsModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:  ${colors.white};
    color: ${colors.black};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 80%;
    text-align: left;
    z-index: 999;
    letter-spacing: 2px;
    font-size: 25px;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        padding: 10px;
    }

    .close-button {
        display: block;
        margin: 0 auto;
        background-color: ${colors.gray};
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
    }
`;



const DrugListItem = (props) => {
    const { id, img, type, company, name, modalExplain,modalImage1,modalImage2,modalImage3,modalImage4 } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const formattedModalExplain = modalExplain.split('.').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));


    return (
        <StyleItem key={id}>
            <ImageContainer
                onClick={openModal} /* 추가: 이미지 클릭 시 모달 열림 */
            >
                <img src={img} alt="drug" />
            </ImageContainer>
            <ItemContainer>
                <StyledParagraph>
                    {company}
                    <br />
                    {type}
                </StyledParagraph>
            </ItemContainer>
            {isModalOpen && (
                <PillsModal>
                    <h4 style={{fontSize: "3rem"}}>{name}</h4>
                    <p>{formattedModalExplain}</p>
                    <br />
                    <button  
                    className="close-button"
                    onClick={closeModal}>닫기</button> 
                </PillsModal>
            )}
        </StyleItem>
      );
      
}

export default DrugListItem;
