import React from "react";
import { Container, Arrow, Wrapper,ButtonUI, Slide, ImgContainer, Image, InfoContainer, Titile, Description } from "./Slider.style";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
 //import { Button } from '@toluna-ui-it/buttons';
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Titile>{item.title}</Titile>
              <Description>{item.desc}</Description>
              <Link to={`/allproducts`}>
                 <ButtonUI>VEZI ACUM</ButtonUI>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;
