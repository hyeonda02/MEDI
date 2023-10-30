import React, { useState, useEffect } from 'react';
import colors from "../styles/colors";
import styled from "styled-components";
import searchkey from "../assets/images/searchkey.png";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import buttonLeft from "../assets/images/ButtonLeft.png";
import buttonRight from "../assets/images/ButtonRight.png";


const PillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

//검색과 필터링 박스
const First= styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap:2vw;
`

//검색
const PillsSearch = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.lightgray};
`
const SearchInput = styled.input`
  width: 25vw;
  height: 3vw;
  font-size: 2rem;
  border: 0.2vw solid #2A2A3A;
  border-radius: 1.5vw;
  background: #191B24;
  color: #484A64;
  outline: none;
  padding: 1.5vw 3.5vw 1.5vw 3vw;
`
const SearchImage = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  position: absolute;
  margin-top: 0vw;
  margin-right: 21vw;
  z-index: 1;
`

// //필터링
// const SelectContainer = styled.div`
//   display: flex;
// `;

const Select = styled.select`
  width: 100% 
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 0.5vw 2vw 0.5vw 2vw;
  height: 3vw;
  border: 0.2vw solid #2A2A3A;
  border-radius: 1.5vw;
  background: #191B24;
  color: #484A64;
`

//배너 슬라이드
const Slides = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.4vw;
`
//배너
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const PillsBannerContainer = styled.div`
  width: 50vw;
  height: 6.75vw;
  border-radius: 0.4vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 2.6vw;
  margin-bottom: 1rem;
`
//배너 이미지
const StyledImage = styled.img`
  max-width: 100%;
  max-height: 200%;
  border-radius: 0.4vw;
`
//배너 양쪽 버튼
const Button = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;
`

const ButtonLeftStyled = styled(Button)`
  position: relative;
  top: 30%;
  left: -10%;
`

const ButtonRightStyled = styled(Button)`
  position: relative;
  top: 30%;
  right: -10%;
`

//배너 밑 동그라미 3개
const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
`

const Circle = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  background: #191B24;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.25vw;
  transition: background-color 0.3s;

  &.active {
    background: #484A64;
  }
`



function Pills() {

  //필터링
  const OPTIONS1 = [
    { value: "child", name: "어린이" },
    { value: "Teenager", name: "청소년" },
    { value: "adult", name: "성인" },
    { value: "old", name: "중년/노년" },
    { value: "pregnant", name: "임산부" },
  ];

  const OPTIONS2 = [
    { value: "tired", name: "피로회복" },
    { value: "eye", name: "눈 건강" },
    { value: "bone", name: "뼈 건강" },
    { value: "detox", name: "해독 작용" },
    { value: "medicine", name: "의약품" },
    { value: "nutrients", name: "영양소 보충" },
  ];


  const [selectedAgeOption, setSelectedAgeOption] = useState('');
  const [selectedUsageOption, setSelectedUsageOption] = useState('');

  const handleAgeOptionChange = (event) => {
    setSelectedAgeOption(event.target.value);
  };

  const handleUsageOptionChange = (event) => {
    setSelectedUsageOption(event.target.value);
  };




  //배너
  const images = [Banner1, Banner2, Banner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction) => {
    let newIndex = currentSlide + direction;

    if (newIndex < 0) {newIndex = images.length - 1;} 
      else if (newIndex >= images.length) {newIndex = 0;}

    setCurrentSlide(newIndex);
  }

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        let newIndex = prevSlide + 1;
        if (newIndex >= images.length) {newIndex = 0;}
        return newIndex;
      });
    }, 3000);

    return () => {clearInterval(autoSlideTimer);};
  }, [images.length]);




  return (
    <PillsContainer>
      <First>
        <PillsSearch> 
          <SearchImage id="icon_search" src={searchkey} alt="searchkey" />
          <SearchInput type="search" placeholder="약품을 검색하세요." />
        </PillsSearch>
        <Select value={selectedAgeOption} onChange={handleAgeOptionChange}>
          <option value="">나이</option>
          {OPTIONS1.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
        <Select value={selectedUsageOption} onChange={handleUsageOptionChange}>
          <option value="">용도</option>
          {OPTIONS2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      </First>

      <Banner>
        <PillsBannerContainer>
          <ButtonLeftStyled src={buttonLeft} onClick={() => handleSlideChange(-1)} alt="ButtonLeft" />
          <Slides>
          <StyledImage src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} id="productImage" />
          </Slides>
          <ButtonRightStyled src={buttonRight} onClick={() => handleSlideChange(1)} alt="ButtonRight" />
        </PillsBannerContainer>
        <CircleContainer>
          {[0, 1, 2].map((circleIndex) => (
            <Circle
              key={circleIndex}
              className={currentSlide === circleIndex ? 'active' : ''}
              onClick={() => setCurrentSlide(circleIndex)}
            />
          ))}
        </CircleContainer>
      </Banner>



    </PillsContainer>
  );
}

export default Pills;