import styled from "styled-components";
import FooterLogo from "../assets/footer-logo.png";
import { devices } from "../utils/sizes";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 0 auto;
  height: 209px;
  background: #000;

  @media ${devices.medium} {
    align-items: center;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
`;

const FooterImg = styled.img`
  margin: 0 auto;
  width: 122px;
  height: 40px;
`;

const FooterText = styled.p`
  font-size: 24px;
  color: #fff;
  margin-top: 30px;

  @media ${devices.medium} {
    font-size: 12px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterImg src={FooterLogo} alt="Kasa - Footer Logo" />
        <FooterText> © 2020 Kasa. All rights reserved</FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
