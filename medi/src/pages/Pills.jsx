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
import SearchInput from "../components/input/input-pills";

const PillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//검색과 필터링 박스
const First = styled.div`
  width: 60%;
  height: 3vw;
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap: 2vw;
`;

//검색
const PillsSearch = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: ${colors.lightgray};
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
  z-index: 1;
`

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vw;
`

const SelectImage = styled.img`
  width: 1vw;
  height: 1vw;
  margin-left: 2vw;
  cursor: pointer;
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
`;

//약 상자 설명
const PillsBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1vw;
  padding-top: 2vw;
`;

const Pills = () => {
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

    const type =
      itemName === "vitamin"
        ? "비타민"
        : itemName === "zinc"
        ? "아연"
        : itemName === "lutein"
        ? "루테인"
        : itemName === "calciumMagnesium"
        ? "칼슘/마그네슘"
        : itemName === "ironOmega3"
        ? "철분제/오메가3"
        : "";

    setSelectedType(type);
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

    const type =
      itemName === "fatigue"
        ? "피로회복"
        : itemName === "eyes"
        ? "눈건강"
        : itemName === "bone"
        ? "뼈건강"
        : itemName === "blood"
        ? "혈관건강"
        : itemName === "pregnantWomen"
        ? "임산부추천"
        : "";

    setSelectedExplain(type);
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

  // 데이터 다 출력
  const [drugs, setDrugData] = useState(DrugData);

  useEffect(() => {
    setDrugData(DrugData);
  }, []);

  // 검색
  const [searchTerm, setSearchTerm] = useState('');

  // 셀렉트
  const [selectedType, setSelectedType] = useState([]);
  const [selectedExplain, setSelectedExplain] = useState([]);

  const filteredDrugs = drugs.filter(drug => {
    const isSelectedType =
      selectedType.length === 0 ||
      (Array.isArray(selectedType)
        ? selectedType.includes(drug.selectType)
        : selectedType === drug.selectType);

    const isSelectedExplain =
    selectedExplain.length === 0 ||
    (Array.isArray(selectedExplain)
      ? selectedExplain.some(explain => drug.selectExplain.split(',').includes(explain))
      : selectedExplain.split(',').some(explain => drug.selectExplain.split(',').includes(explain)));

    return (
      isSelectedType &&
      isSelectedExplain &&
      (drug.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <PillsContainer>
      <First>
        <PillsSearch>
          <SearchImage id="icon_search" src={searchkey} alt="searchkey" />
          <SearchInput onChange={handleSearchTermChange} value={searchTerm} placeholder="약품을 검색하세요."/>
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
          <SelectContainer onClick={() => handleItemClick('vitamin')}>
            <SelectImage src={checkedItems.vitamin ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.vitamin ? colors.white : "#949494", cursor: "pointer" }}>비타민</SortP>
          </SelectContainer>
          <SelectContainer onClick={() => handleItemClick('zinc')}>
            <SelectImage src={checkedItems.zinc ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.zinc ? colors.white : "#949494", cursor: "pointer" }}>아연</SortP>
          </SelectContainer>
          <SelectContainer onClick={() => handleItemClick('lutein')}>
            <SelectImage src={checkedItems.lutein ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.lutein ? colors.white : "#949494", cursor: "pointer" }}>루테인</SortP>
          </SelectContainer>
          <SelectContainer onClick={() => handleItemClick('calciumMagnesium')}>
            <SelectImage src={checkedItems.calciumMagnesium ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.calciumMagnesium ? colors.white : "#949494", cursor: "pointer" }}>칼슘/마그네슘</SortP>
          </SelectContainer>
          <SelectContainer style={{ marginBottom: "1vw" }} onClick={() => handleItemClick('ironOmega3')}>
            <SelectImage src={checkedItems.ironOmega3 ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems.ironOmega3 ? colors.white : "#949494", cursor: "pointer" }}>철분제/오메가3</SortP>
          </SelectContainer>
        </SelectDiv>
      )}

      {selectDivVisible2 && (
        <SelectDiv style={{ marginLeft: "47vw" }}>
          <SelectContainer onClick={() => handleItemClick2('fatigue')}>
            <SelectImage src={checkedItems2.fatigue ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.fatigue ? colors.white : "#949494", cursor: "pointer" }}>피로회복</SortP>
          </SelectContainer>
          <SelectContainer onClick={() => handleItemClick2('eyes')}>
            <SelectImage src={checkedItems2.eyes ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.eyes ? colors.white : "#949494", cursor: "pointer" }}>눈 건강</SortP>
          </SelectContainer>
          <SelectContainer onClick={() => handleItemClick2('bone')}>
            <SelectImage src={checkedItems2.bone ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.bone ? colors.white : "#949494", cursor: "pointer" }}>뼈 건강</SortP>
          </SelectContainer>
          <SelectContainer onClick={() => handleItemClick2('blood')}>
            <SelectImage src={checkedItems2.blood ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.blood ? colors.white : "#949494", cursor: "pointer" }}>혈관 건강</SortP>
          </SelectContainer>
          <SelectContainer style={{ marginBottom: "1vw" }} onClick={() => handleItemClick2('pregnantWomen')}>
            <SelectImage src={checkedItems2.pregnantWomen ? yescheck_radio : nocheck_radio} alt="nocheck"/> 
            <SortP style={{ marginLeft: "1vw", color: checkedItems2.pregnantWomen ? colors.white : "#949494", cursor: "pointer" }}>임산부 추천</SortP>
          </SelectContainer>
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
        <PillsList data={filteredDrugs} selectType={selectedType} selectExplain={selectedExplain}/>
      </PillsBoxContainer>
    </PillsContainer>
  );
}

export default Pills;
