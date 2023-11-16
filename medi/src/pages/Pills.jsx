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
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap: 2vw;
  height: 3vw;
`;

//검색
const PillsSearch = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.lightgray};
`;
const SearchInput = styled.input`
  width: 25vw;
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
  margin-top: 0vw;
  margin-right: 21vw;
  z-index: 1;
`;

// //필터링

const sortContainer = styled.div`
  width: 100% 
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 0.5vw 2vw 0.5vw 2vw;
  height: 3vw;
  border: 0.2vw solid #2A2A3A;
  border-radius: 1.5vw;
  background: #191B24;
  color: ${colors.darkslateblue};
  font-size: 2rem;
 

  @media screen and (max-width: 600px) {
    font-size: 1.5rem; /* 화면이 작을 때 글꼴 크기 조절 */
  }
`;

//셀렉트박스

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
  width: 70%;
  // max-width: 50vw; /* 최대 너비 설정 */
  height:  9vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 2.6vw;
  margin-bottom: 1rem;
  background-color: pink;
`;

// 배너 이미지
const Image = styled.img`
  width: 100%; /* 이미지 전체 너비를 사용 */
  max-height: 100%;
  max-width: 100%;
  border-radius: 0.5vw;

  @media screen and (max-width: 600px) {
    width: 80%; /* 화면이 작을 때 이미지 크기를 줄임 */
  }
`;
//배너크기에 이미지를 맞춰

// 배너 양쪽 버튼
const Button = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 1vw; /* 화면이 작을 때 버튼 크기를 줄임 */
    height: 1vw;
  }
`;

const ButtonLeftStyled = styled(Button)`
  position: relative;
  top: 30%;
  left: -10%;

  @media screen and (max-width: 600px) {
    top: 20%; /* 화면이 작을 때 버튼 위치를 조절 */
  }
`;

const ButtonRightStyled = styled(Button)`
  position: relative;
  top: 30%;
  right: -10%;

  @media screen and (max-width: 600px) {
    top: 20%; /* 화면이 작을 때 버튼 위치를 조절 */
  }
`;

// 배너 밑 동그라미 3개
const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    margin-top: 3rem; /* 화면이 작을 때 동그라미 위치를 조절 */
  }
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
  //필터링
  const OPTIONS1 = [
    { value: "vitamin", name: "비타민" },
    { value: "zinc", name: "아연" },
    { value: "lutein", name: "루테인" },
    { value: "Calcium/Magnesium", name: "칼슘/마그네슘" },
    { value: "Iron supplements/Omega 3", name: "철분제/오메가3" },
  ];

  const OPTIONS2 = [
    { value: "tired", name: "피로회복" },
    { value: "eye", name: "눈 건강" },
    { value: "bone", name: "뼈 건강" },
    { value: "vascular health", name: "혈관 건강" },
    { value: "pregnant", name: "임산부 추천" },
  ];

  const [selectedAgeOption, setSelectedAgeOption] = useState("");
  const [selectedUsageOption, setSelectedUsageOption] = useState("");

  const handleAgeOptionChange = (event) => {
    setSelectedAgeOption(event.target.value);
  };

  const handleUsageOptionChange = (event) => {
    setSelectedUsageOption(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("종류");
  const [clickStatus, setClickStatus] = useState({
    비타민: true,
    아연: false,
    루테인: false,
    "칼슘/마그네슘": false,
    "철분제/오메가3": false,
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    const updatedClickStatus = {
      비타민: false,
      아연: false,
      루테인: false,
      "칼슘/마그네슘": false,
      "철분제/오메가3": false,
    };
    updatedClickStatus[option] = true;
    setClickStatus(updatedClickStatus);
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

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
  // useEffect(() => {
  //   fetch("../drugs.js")
  //     .then((response) => response.json())
  //     .then((data) => setDrugs(data))
  //     .catch((error) => console.error("데이터 로딩 오류: ", error));
  // }, []);

  return (
    <PillsContainer>
      <First>
        <PillsSearch>
          <SearchImage id="icon_search" src={searchkey} alt="searchkey" />
          <SearchInput type="search" placeholder="약품을 검색하세요." />
        </PillsSearch>
        <div
          className="sortContainer"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            padding: "0.5vw 2vw 0.5vw 2vw",
            height: "3vw",
            color: "white",
            border: "0.2vw solid #2A2A3A",
            borderRadius: "1.5vw",
            background: "#191B24",
            zIndex: 9999,
          }}
        >
          <div
            className="sortSelect"
            onClick={toggleDropdown}
            style={{ position: "relative" }}
          >
            <img
              src={icon_down}
              alt="icon_down"
              id="icon_down"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "20px",
              }}
            />
            <p id="sortTitle">{selectedOption}</p>
          </div>
          {isDropdownVisible && (
            <div className="dropdown-options" id="dropdown-options">
              {OPTIONS1.map((option) => (
                <div
                  style={{ fontSize: "2rem", margin: "10px 0" }}
                  className="dropdown-option"
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <img
                    src={
                      clickStatus[option.value] ? yescheck_radio : nocheck_radio
                    }
                    alt="radio"
                    id={`radio_${option.value}`}
                  />
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className="sortContainer"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            padding: "0.5vw 2vw 0.5vw 2vw",
            height: "3vw",
            color: "white",
            border: "0.2vw solid #2A2A3A",
            borderRadius: "1.5vw",
            background: "#191B24",
            zIndex: 9999,
          }}
        >
          <div className="sortSelect" onClick={toggleDropdown}>
            <img src={icon_down} alt="icon_down" id="icon_down" />
            <p id="sortTitle">{selectedOption}</p>
          </div>
          {isDropdownVisible && (
            <div className="dropdown-options" id="dropdown-options">
              {OPTIONS2.map((option) => (
                <div
                  style={{ fontSize: "2rem", margin: "10px 0" }}
                  className="dropdown-option"
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <img
                    src={
                      clickStatus[option.value] ? yescheck_radio : nocheck_radio
                    }
                    alt="radio"
                    id={`radio_${option.value}`}
                  />
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </First>
      {/* <p></p> <p></p> <p></p> <p></p> <p></p>
      <p></p> <p></p> <p></p> <p></p> <p></p> */}
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
