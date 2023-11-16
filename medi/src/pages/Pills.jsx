import React, { useState, useEffect } from "react";
import colors from "../styles/colors";
import styled from "styled-components";
import searchkey from "../assets/images/searchkey.png";
import icon_up from "../assets/images/icon_up.png";
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
    font-size: 1.5rem;
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
const SortDiv = styled.div`
  width: 22%;
  height: 3vw;
  border: 0.2vw solid #2a2a3a;
  border-radius: 1.5vw;
  background: #191b24;
  color: #484a64;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const SortP = styled.p`
  color: #949494;
  font-size: 1vw;
`

const SelectDiv = styled.div`
  min-width: 12.5vw;
  border: 0.05vw solid ${colors.white};
  border-radius: 2.5vw;
  background-color: #191B24;
  position: absolute;
  margin-top: 7.5%;
  margin-left: 16.5vw;
`


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

  // 셀렉트
  const [checkedItems, setCheckedItems] = useState({
    vitamin: false,
    zinc: false,
    lutein: false,
    calciumMagnesium: false,
    ironOmega3: false,
  });

  const handleItemClick = (itemName) => {
    setCheckedItems((prevCheckedItems) => ({
      vitamin: false,
      zinc: false,
      lutein: false,
      calciumMagnesium: false,
      ironOmega3: false,
      [itemName]: !prevCheckedItems[itemName],
    }));
  };

  const [checkedItems2, setCheckedItems2] = useState({
    fatigue: false,
    eyes: false,
    bone: false,
    blood: false,
    pregnantWomen: false,
  });

  const handleItemClick2 = (itemName) => {
    setCheckedItems2((prevCheckedItems) => ({
      fatigue: false,
      eyes: false,
      bone: false,
      blood: false,
      pregnantWomen: false,
      [itemName]: !prevCheckedItems[itemName],
    }));
  };

  // 셀렉트 보이기 안보이기
  const [selectDivVisible, setSelectDivVisible] = useState(false);

  const handleSortDivClick = () => {
    setSelectDivVisible(!selectDivVisible);
  };

  const [selectDivVisible2, setSelectDivVisible2] = useState(false);

  const handleSortDivClick2 = () => {
    setSelectDivVisible2(!selectDivVisible2);
  };

  return (
    <PillsContainer>
      <First>
        <PillsSearch>
          <SearchImage id="icon_search" src={searchkey} alt="searchkey" />
          <SearchInput type="search" placeholder="약품을 검색하세요." />
        </PillsSearch>
        <SortDiv onClick={handleSortDivClick}>
          <SortP>
            {checkedItems.vitamin ? "비타민" : checkedItems.zinc ? "아연" : checkedItems.lutein ? "루테인" : checkedItems.calciumMagnesium ? "칼슘/마그네슘" : checkedItems.ironOmega3 ? "철분제/오메가3" : "종류"}
          </SortP>
          <img src={selectDivVisible ? icon_up : icon_down} alt="icon" style={{ width: "1.8vw", height: "1vw", cursor: "pointer" }}/>
        </SortDiv>

        <SortDiv onClick={handleSortDivClick2}>
          <SortP>
            {checkedItems2.fatigue ? "피로회복" : checkedItems2.eyes ? "눈 건강" : checkedItems2.bone ? "뺘 건강" : checkedItems2.blood ? "혈관 건강" : checkedItems2.pregnantWomen ? "임산부 추천" : "용도"}
          </SortP>
          <img src={selectDivVisible2 ? icon_up : icon_down} alt="icon" style={{width: "1.8vw", height: "1vw", cursor: "pointer"}}/>        
        </SortDiv>
      </First>

      {selectDivVisible && (
        <SelectDiv>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick('vitamin')}>
            <img src={checkedItems.vitamin ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.vitamin ? colors.white : "#949494", cursor: "pointer" }}>비타민</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick('zinc')}>
            <img src={checkedItems.zinc ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.zinc ? colors.white : "#949494", cursor: "pointer" }}>아연</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick('lutein')}>
            <img src={checkedItems.lutein ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.lutein ? colors.white : "#949494", cursor: "pointer" }}>루테인</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick('calciumMagnesium')}>
            <img src={checkedItems.calciumMagnesium ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.calciumMagnesium ? colors.white : "#949494", cursor: "pointer" }}>칼슘/마그네슘</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw", marginBottom: "1vw" }} onClick={() => handleItemClick('ironOmega3')}>
            <img src={checkedItems.ironOmega3 ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.ironOmega3 ? colors.white : "#949494", cursor: "pointer" }}>철분제/오메가3</SortP>
          </div>
        </SelectDiv>
      )}

      {selectDivVisible2 && (
        <SelectDiv style={{ marginLeft: "47vw" }}>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick2('fatigue')}>
            <img src={checkedItems2.fatigue ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.fatigue ? colors.white : "#949494", cursor: "pointer" }}>피로회복</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick2('eyes')}>
            <img src={checkedItems2.eyes ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.eyes ? colors.white : "#949494", cursor: "pointer" }}>눈 건강</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick2('bone')}>
            <img src={checkedItems2.bone ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.bone ? colors.white : "#949494", cursor: "pointer" }}>뼈 건강</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw" }} onClick={() => handleItemClick2('blood')}>
            <img src={checkedItems2.blood ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.blood ? colors.white : "#949494", cursor: "pointer" }}>혈관 건강</SortP>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "1vw", marginBottom: "1vw" }} onClick={() => handleItemClick2('pregnantWomen')}>
            <img src={checkedItems2.pregnantWomen ? yescheck_radio : nocheck_radio} alt="nocheck" style={{ width: "1vw", height: "1vw", marginLeft: "2vw", cursor: "pointer" }} /> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.pregnantWomen ? colors.white : "#949494", cursor: "pointer" }}>임산부 추천</SortP>
          </div>
        </SelectDiv>
      )}

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
