import { useState } from "react";
import styled from "styled-components";
import OpenArrow from "../../assets/icons/open-arrow.svg";
import CloseArrow from "../../assets/icons/close-arrow.svg";
import { about } from "../../utils/about";
import "../../styles/Dropdown.css";
import { devices } from "../../utils/sizes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto 200px;

  @media ${devices.tablet} {
    margin: 0 50px;
  }

  @media ${devices.medium} {
    margin: 0 20px;
  }
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
`;

const Item = styled.div`
  width: 100%;
  margin-bottom: 30px;
  background: #f7f7f7;
  border-radius: 5px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  padding: 0 30px 0 20px;
  background: #ff6060;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #fff;

  @media ${devices.medium} {
    font-size: 13px;
  }
`;

const Content = styled.div`
  display: none;
  padding: 30px 20px 10px;

  @media ${devices.medium} {
    padding: 25px 20px;
  }
`;

const ContentText = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: #ff6060;

  @media ${devices.medium} {
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

function Dropdown() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <Wrapper>
      <Accordion>
        {about.map((about, i) => (
          <Item key={`${about.id}-${i}`}>
            <TitleWrapper onClick={() => toggle(i)}>
              <Title>{about.title}</Title>
              {selected === i ? (
                <img src={OpenArrow} alt="opened arrow" />
              ) : (
                <img src={CloseArrow} alt="closed arrow" />
              )}
            </TitleWrapper>
            <Content className={selected === i && "content show"}>
              <ContentText>{about.content}</ContentText>
            </Content>
          </Item>
        ))}
      </Accordion>
    </Wrapper>
  );
}

export default Dropdown;
