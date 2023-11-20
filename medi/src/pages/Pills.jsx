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
  min-height: 80vh;
`;

const First = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap: 2vw;
`;

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
  margin-left: 2vw;
  z-index: 1;
`;

const SortDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  border: 0.2vw solid ${colors.darkgray};
  border-radius: 1.5vw;
  background: ${colors.gray};
  color: ${colors.darkslateblue};
  font-size: 1.1vw;
  gap: 2vw;
  cursor: pointer;
  z-index: 2;
`;

const SortP = styled.p`
  color: ${colors.navy};
  font-size: 1.1vw;
`;

const SelectDiv = styled.div`
  position: absolute;
  min-width: 12.5vw;
  margin-top: 48%;
  margin-left: 16.5%;
  border: 0.05vw solid ${colors.white};
  border-radius: 2.5vw;
  background-color: ${colors.gray};
  z-index: 1;
`;

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

const Slides = styled.div`
  width: 100%;
  height: 100%;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const Image = styled.img`
  width: 100%;
  border-radius: 0.5vw;
`;

const Button = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;
`;

const ButtonLeftStyled = styled(Button)``;

const ButtonRightStyled = styled(Button)``;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5vw;
  gap: 1vw;
`;

const Circle = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  background: ${colors.gray};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background: ${colors.darkslateblue};
  }
`;

const PillsBoxContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-left: 1vw;
`;

const Pills = () => {

  // 검색어
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //배너
  const images = [Banner1, Banner2, Banner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 변경 처리 함수
  const handleSlideChange = (direction) => {
    let newIndex = currentSlide + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentSlide(newIndex);
  };
  // 자동 슬라이드 타이머 설정
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

  //셀렉트
  const [checkedItems, setCheckedItems] = useState({
    vitamin: false,
    zinc: false,
    lutein: false,
    calciumMagnesium: false,
    ironOmega3: false,
  });
  // 클릭 처리 함수
  const handleItemClick = (itemName) => {
    setCheckedItems((prevCheckedItems) => {
      const newState = {
        vitamin: false,
        zinc: false,
        lutein: false,
        calciumMagnesium: false,
        ironOmega3: false,
        [itemName]: !prevCheckedItems[itemName],
      };

      if (prevCheckedItems[itemName]) {
        setSelectedType([]);
      } else {
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
      }

      return newState;
    });
  };
  //두 번째 셀렉트
  const [checkedItems2, setCheckedItems2] = useState({
    fatigue: false,
    eyes: false,
    bone: false,
    blood: false,
    pregnantWomen: false,
  });

  const handleItemClick2 = (itemName) => {
    setCheckedItems2((prevCheckedItems) => {
      const newState = {
        fatigue: false,
        eyes: false,
        bone: false,
        blood: false,
        pregnantWomen: false,
        [itemName]: !prevCheckedItems[itemName],
      };

      if (prevCheckedItems[itemName]) {
        setSelectedExplain([]);
      } else {
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
      }

      return newState;
    });
  };

  // 셀렉트 보이기 안보이기 설정
  const [selectDivVisible, setSelectDivVisible] = useState(false);

  const handleSortDivClick = () => {
    setSelectDivVisible(!selectDivVisible);
  };

  const [selectDivVisible2, setSelectDivVisible2] = useState(false);

  const handleSortDivClick2 = () => {
    setSelectDivVisible2(!selectDivVisible2);
  };

  // 데이터 모두 출력
  const [drugs, setDrugData] = useState(DrugData);

  useEffect(() => {
    setDrugData(DrugData);
  }, []);

  // 셀렉트 타입 및 설명
  const [selectedType, setSelectedType] = useState([]);
  const [selectedExplain, setSelectedExplain] = useState([]);

  // 데이터 필터링
  const filteredDrugs = drugs.filter((drug) => {
    const isSelectedType =
      selectedType.length === 0 ||
      (Array.isArray(selectedType)
        ? selectedType.includes(drug.selectType)
        : selectedType === drug.selectType);

    const isSelectedExplain =
      selectedExplain.length === 0 ||
      (Array.isArray(selectedExplain)
        ? selectedExplain.some((explain) =>
            drug.selectExplain.split(",").includes(explain)
          )
        : selectedExplain
            .split(",")
            .some((explain) =>
              drug.selectExplain.split(",").includes(explain)
            ));

    return (
      isSelectedType &&
      isSelectedExplain &&
      (drug.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <PillsContainer>
      <First>
        <PillsSearch>
          <SearchImage id="icon_search" src={searchkey} alt="searchkey" />
          <SearchInput
            onChange={handleSearchTermChange}
            value={searchTerm}
            placeholder="약품을 검색하세요."
          />
        </PillsSearch>

        <SortDiv onClick={handleSortDivClick}>
          <SortP>
            {checkedItems.vitamin
              ? "비타민"
              : checkedItems.zinc
              ? "아연"
              : checkedItems.lutein
              ? "루테인"
              : checkedItems.calciumMagnesium
              ? "칼슘/마그네슘"
              : checkedItems.ironOmega3
              ? "철분제/오메가3"
              : "종류"}
          </SortP>
          <img
            src={selectDivVisible ? icon_up : icon_down}
            alt="icon"
            style={{ width: "1.5vw", height: "0.7vw", cursor: "pointer" }}
          />
        </SortDiv>
        <SortDiv onClick={handleSortDivClick2}>
          <SortP>
            {checkedItems2.fatigue
              ? "피로회복"
              : checkedItems2.eyes
              ? "눈 건강"
              : checkedItems2.bone
              ? "뼈 건강"
              : checkedItems2.blood
              ? "혈관 건강"
              : checkedItems2.pregnantWomen
              ? "임산부 추천"
              : "용도"}
          </SortP>
          <img
            src={selectDivVisible2 ? icon_up : icon_down}
            alt="icon"
            style={{ width: "1.5vw", height: "0.7vw", cursor: "pointer" }}
          />
        </SortDiv>

        {selectDivVisible && (
          <SelectDiv style={{ marginLeft: "32vw" }}>
            <SelectContainer onClick={() => handleItemClick("vitamin")}>
              <SelectImage
                src={checkedItems.vitamin ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems.vitamin ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                비타민
              </SortP>
            </SelectContainer>
            <SelectContainer onClick={() => handleItemClick("zinc")}>
              <SelectImage
                src={checkedItems.zinc ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems.zinc ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                아연
              </SortP>
            </SelectContainer>
            <SelectContainer onClick={() => handleItemClick("lutein")}>
              <SelectImage
                src={checkedItems.lutein ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems.lutein ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                루테인
              </SortP>
            </SelectContainer>
            <SelectContainer
              onClick={() => handleItemClick("calciumMagnesium")}
            >
              <SelectImage
                src={
                  checkedItems.calciumMagnesium ? yescheck_radio : nocheck_radio
                }
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems.calciumMagnesium
                    ? colors.white
                    : "#949494",
                  cursor: "pointer",
                }}
              >
                칼슘/마그네슘
              </SortP>
            </SelectContainer>
            <SelectContainer
              style={{ marginBottom: "1vw" }}
              onClick={() => handleItemClick("ironOmega3")}
            >
              <SelectImage
                src={checkedItems.ironOmega3 ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems.ironOmega3 ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                철분제/오메가3
              </SortP>
            </SelectContainer>
          </SelectDiv>
        )}

        {selectDivVisible2 && (
          <SelectDiv style={{ marginLeft: "47vw" }}>
            <SelectContainer onClick={() => handleItemClick2("fatigue")}>
              <SelectImage
                src={checkedItems2.fatigue ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems2.fatigue ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                피로회복
              </SortP>
            </SelectContainer>
            <SelectContainer onClick={() => handleItemClick2("eyes")}>
              <SelectImage
                src={checkedItems2.eyes ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems2.eyes ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                눈 건강
              </SortP>
            </SelectContainer>
            <SelectContainer onClick={() => handleItemClick2("bone")}>
              <SelectImage
                src={checkedItems2.bone ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems2.bone ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                뼈 건강
              </SortP>
            </SelectContainer>
            <SelectContainer onClick={() => handleItemClick2("blood")}>
              <SelectImage
                src={checkedItems2.blood ? yescheck_radio : nocheck_radio}
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems2.blood ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                혈관 건강
              </SortP>
            </SelectContainer>
            <SelectContainer
              style={{ marginBottom: "1vw" }}
              onClick={() => handleItemClick2("pregnantWomen")}
            >
              <SelectImage
                src={
                  checkedItems2.pregnantWomen ? yescheck_radio : nocheck_radio
                }
                alt="nocheck"
              />
              <SortP
                style={{
                  marginLeft: "1vw",
                  color: checkedItems2.pregnantWomen ? colors.white : "#949494",
                  cursor: "pointer",
                }}
              >
                임산부 추천
              </SortP>
            </SelectContainer>
          </SelectDiv>
        )}
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
        {filteredDrugs.length === 0 ? (
          <p style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}>
            정보 없음...
          </p>
        ) : (
          <PillsList
            data={filteredDrugs}
            selectType={selectedType}
            selectExplain={selectedExplain}
          />
        )}
      </PillsBoxContainer>
    </PillsContainer>
  );
}

export default Pills;
