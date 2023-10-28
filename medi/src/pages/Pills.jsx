import React, { useState, useEffect, useRef } from 'react';
import colors from "../styles/colors";
import styled from "styled-components";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import buttonLeft from "../assets/images/ButtonLeft.png";
import buttonRight from "../assets/images/ButtonRight.png";

const PillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//검색
const PillsSearch = styled.div`
  width: 80%;
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  color: ${colors.lightgray};
  margin-top: 5rem; /* PillsSearch를 아래로 내리는 여백 추가 */
  margin-left: -50rem;
`;

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
`;

//필터링
const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -58.5rem;
  margin-bottom: 50rem;
  margin-right: -50rem;
`;

const SortSelect = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SortTitle = styled.p`
  font-weight: 500;
  font-size: 1vw;
  line-height: 0.8vw;
  color: ${colors.lightgray};
  border: 0.2vw solid #2A2A3A;
  border-radius: 1.5vw;
  background: #191B24;
  padding: 1vw 3vw 1vw 3vw;
`;

const DropdownOptions = styled.div`
  width: 6vw;
  height: 10vw;
  border-radius: 0.5vw;
  border: 0.3vw solid #2A2A3A;
  background: #191B24;
  color: ${colors.lightgray};
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const DropdownOption = styled.div`
  text-align: center;
  height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
  font-size: 0.8vw;
  color: ${colors.lightgray};
`;

//배너
const Slides = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.4vw;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

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
`;

const Button = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;
`;

const ButtonLeftStyled = styled(Button)`
  margin-right: 1vw;
  position: relative;
  left: -3%;  /* 왼쪽에서 3% 위치에 배치 */
  top: 50%;  /* 세로 중앙 정렬 */
`;

const ButtonRightStyled = styled(Button)`
  margin-left: 1vw;
  position: relative;
  right: 5%;  
  top: 50%; 
`;


const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem; /* 여백 설정 */
`;

const Circle = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  background: #191B24;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.25vw; /* 각 동그라미 사이 여백 추가 */
  transition: background-color 0.3s;

  &.active {
    background: #484A64;
  }
`;




function Pills() {

  //정렬 박스(셀렉트 박스)
  const [selectedOption, setSelectedOption] = useState('나이');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [clickStatus, setClickStatus] = useState({
      '어린이': true,
      '청소년': false,
      '성인': false,
      '중년/노년': false,
      '임산부': false,
  });
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
      setSelectedOption(option);

      const updatedClickStatus = {
       '어린이': false,
       '청소년': true,
       '성인': false,
       '중년/노년': false,
       '임산부': false,
      };
      updatedClickStatus[option] = true;
      setClickStatus(updatedClickStatus);
  };

  const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownVisible(false);
      }
  };

  //베너박스
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
}, []);


  return (
    <PillsContainer>
      <PillsSearch>
        <SearchInput type="search" placeholder="약품을 검색하세요." />
      </PillsSearch>

      <Banner>
        <PillsBannerContainer>
          <ButtonLeftStyled src={buttonLeft} onClick={() => handleSlideChange(-1)} alt="ButtonLeft" />
          <Slides>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} id="productImage" />
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

      <SortContainer>
      <SortSelect onClick={toggleDropdown}>
        <SortTitle>{selectedOption}</SortTitle>
      </SortSelect>
      <DropdownOptions visible={isDropdownVisible}>
        {['어린이','청소년','성인','중년/노년','임산부'].map((option) => (
          <DropdownOption key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownOption>
        ))}
      </DropdownOptions>
    </SortContainer>



    </PillsContainer>
  );
}

export default Pills;
