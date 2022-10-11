import styled from "styled-components";
import BannerImage from "../assets/hero-banner.jpg";
import { devices } from "../utils/sizes";

const HeroContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;

  @media ${devices.tablet} {
    margin: 20px;
  }

  @media ${devices.medium} {
    margin: 20px;
  }

  @media ${devices.mobile} {
    margin: 20px;
  }
`;

const HeroImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 223px;
  background-color: #000;
  opacity: 0.9;
  background: url(${BannerImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  mix-blend-mode: darken;

  @media ${devices.mobile} {
    justify-content: flex-start;
  }
`;

const HeroText = styled.p`
  color: #fff;
  font-size: 48px;

  @media ${devices.medium} {
    font-size: 28px;
  }

  @media ${devices.mobile} {
    font-size: 24px;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroImg>
        <HeroText>Chez vous, partout ailleurs</HeroText>
      </HeroImg>
    </HeroContainer>
  );
}

export default Hero;
