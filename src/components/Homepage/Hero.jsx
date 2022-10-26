// Styled Components
import styled from "styled-components";

// Components
import BannerImage from "../../assets/home/hero-banner.jpg";

// Utils
import { devices } from "../../utils/sizes";

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
  height: 223px;
  background-color: #000;
  background: url(${BannerImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  mix-blend-mode: darken;
  position: relative;

  @media ${devices.mobile} {
    height: 111px;
  }

  &:before {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    content: "Chez vous, partout et ailleurs";
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 48px;
    border-radius: 25px;

    @media ${devices.medium} {
      font-size: 28px;
    }
    @media ${devices.mobile} {
      font-size: 24px;
      height: 111px;
    }
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroImg></HeroImg>
    </HeroContainer>
  );
}

export default Hero;
