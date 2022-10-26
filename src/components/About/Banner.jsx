// Styled Components
import styled from "styled-components";

// Components
import DesktopBanner from "../../assets/about/about_banner_cropped.png";
import MobileBanner from "../../assets/about/about_banner_cropped_m.png";

// Utils
import { devices } from "../../utils/sizes";

const BannerContainer = styled.div`
  margin: 0 auto 30px;
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

const BannerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 223px;
  background: url(${DesktopBanner});
  background-size: cover;
  background-position: center;
  border-radius: 25px;

  @media ${devices.mobile} {
    min-width: 336px;
    min-height: 223px;
    background: url(${MobileBanner}) no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerImg></BannerImg>
    </BannerContainer>
  );
}

export default Banner;
