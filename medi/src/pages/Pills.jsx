import React, { useState, useEffect, useRef } from "react";
import colors from "../styles/colors";
import styled from "styled-components";
import searchkey from "../assets/images/searchkey.png";
import icon_down from "../assets/images/icon_down.png";
import yescheck_radio from "../assets/images/yescheck_radio.png";
import nocheck_radio from "../assets/images/nocheck_radio.png";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import buttonLeft from "../assets/images/ButtonLeft.png";
import buttonRight from "../assets/images/ButtonRight.png";
import PillsList from "../components/list/list-pills";

import DrugData from "../util/drug";

const PillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//검색과 필터링 박스
const First = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap: 2vw;
  height: 3vw;
`;

//검색
const PillsSearch = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: ${colors.lightgray};
`;

const SearchInput = styled.input`
  width: 100%;
  height: 3vw;
  border: 0.2vw solid #2a2a3a;
  border-radius: 1.5vw;
  background: #191b24;
  color: #484a64;
  outline: none;
  padding: 1.5vw 3.5vw 1.5vw 3vw;
  font-size: 2rem; /* 기본 글꼴 크기 설정 */

  @media screen and (max-width: 600px) {
    font-size: 1.5rem; /* 화면이 작을 때 글꼴 크기 조절 */
  }
`;
const SearchImage = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  position: absolute;
  margin-left: 1vw;
  z-index: 1;
`;

//필터링

//배너 슬라이드
const Slides = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.4vw;
`;
//배너
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;
const PillsBannerContainer = styled.div`
  width: 65%;
  height: 9vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 2.6vw;
  margin-bottom: 1rem;
  gap: 1vw;
`;

// 배너 이미지
const Image = styled.img`
  width: 100%;
  border-radius: 0.5vw;
`;

// 배너 양쪽 버튼
const Button = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;
`;

const ButtonLeftStyled = styled(Button)``;

const ButtonRightStyled = styled(Button)``;

// 배너 밑 동그라미 3개
const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5vw;
`;

const Circle = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  background: #191b24;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.25vw;
  transition: background-color 0.3s;

  &.active {
    background: #484a64;
  }

  @media screen and (max-width: 600px) {
    width: 0.3vw; /* 화면이 작을 때 동그라미 크기를 줄임 */
    height: 0.3vw;
  }
`;
//약 상자 설명
const PillsBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1vw;
  padding-top: 2vw;
`;

function Pills() {
  //배너
  const images = [Banner1, Banner2, Banner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction) => {
    let newIndex = currentSlide + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        let newIndex = prevSlide + 1;
        if (newIndex >= images.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 3000);

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [images.length]);

  //약 리스트
  const [drugs, setDrugData] = useState(DrugData);

  useEffect(() => {
    setDrugData(DrugData);
  }, []);

  return (
    <PillsContainer>
      <First>
        <PillsSearch>
          <SearchImage id="icon_search" src={searchkey} alt="searchkey" />
          <SearchInput type="search" placeholder="약품을 검색하세요." />
        </PillsSearch>
      </First>

      <Banner>
        <PillsBannerContainer>
          <ButtonLeftStyled
            src={buttonLeft}
            onClick={() => handleSlideChange(-1)}
            alt="ButtonLeft"
          />
          <Slides>
            <Image
              src={images[currentSlide]}
              alt="Banner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Slides>
          <ButtonRightStyled
            src={buttonRight}
            onClick={() => handleSlideChange(1)}
            alt="ButtonRight"
          />
        </PillsBannerContainer>
        <CircleContainer>
          {[0, 1, 2].map((circleIndex) => (
            <Circle
              key={circleIndex}
              className={currentSlide === circleIndex ? "active" : ""}
              onClick={() => setCurrentSlide(circleIndex)}
            />
          ))}
        </CircleContainer>
      </Banner>
      <PillsBoxContainer>
        <PillsList data={drugs} />
      </PillsBoxContainer>
    </PillsContainer>
  );
}

export default Pills;
