import React, { useState, useEffect } from 'react';
import colors from "../styles/colors";
import styled from "styled-components";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import buttonLeft from "../assets/images/ButtonLeft.png";
import buttonRight from "../assets/images/ButtonRight.png";



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
  width: 30%;
  height: 50px;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  margin-top: 1.2vw;
  border: 0.1vw solid #2A2A3A;
  border-radius: 1.6vw;
  background: #191B24;
  color: #484A64;
  outline: none;
  padding-left: 3.5vw;
  padding-right: 1vw;
`;

const Slides = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.4vw;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  position: absolute;
  left: 500px; 
  top: 50%; 
  
`;

const ButtonRightStyled = styled(Button)`
  margin-left: 1vw;
  position: absolute;
  right: 500px; 
  top: 50%; 
  
`;


const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
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
  const images = [Banner1, Banner2, Banner3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchText, setSearchText] = useState('');

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


  return (
    <PillsContainer>
        
        <PillsSearch>
         <SearchInput type="search" placeholder="약품을 검색하세요." />
        </PillsSearch>

      <Banner>
        <BannerBody>
          <PillsBannerContainer>
            <ButtonLeftStyled src={buttonLeft} onClick={() => handleSlideChange(-1)} alt="ButtonLeft" />
            <Slides>
              <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} id="productImage" />
            </Slides>
            <ButtonRightStyled src={buttonRight} onClick={() => handleSlideChange(1)} alt="ButtonRight" />
          </PillsBannerContainer>
        </BannerBody>
      </Banner>
     
      <CircleContainer>
      {[0, 1, 2].map((circleIndex) => (
        <Circle
          key={circleIndex}
          className={currentSlide === circleIndex ? 'active' : ''}
          onClick={() => setCurrentSlide(circleIndex)}
        />
      ))}
    </CircleContainer>
    
 


    </PillsContainer>
  );
}

export default Pills;
