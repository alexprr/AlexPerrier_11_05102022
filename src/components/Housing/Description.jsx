import styled from "styled-components";
import { useState } from 'react'
import { devices } from "../../utils/sizes";
import OpenArrow from "../../assets/icons/open-arrow.svg"
import CloseArrow from "../../assets/icons/close-arrow.svg"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1240px;
  margin: 24px 80px 200px 0;

  @media ${devices.tablet} {
    margin: 0 50px;
  }

  @media ${devices.medium} {
    margin: 0 20px;
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  width: 582px;
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 30px;
  background: #f7f7f7;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  padding: 0 30px 0 20px;
  background: #ff6060;
  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #fff;

  @media ${devices.medium} {
    font-size: 13px;
  }
`;

export const Content = styled.div`
  display: none;
  padding: 30px 20px 10px;
  height: 249px;

  @media ${devices.medium} {
    padding: 25px 20px;
  }
`;

const ContentText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  color: #ff6060;

  @media ${devices.medium} {
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

export default function Description({description}) {
    const [selected, setSelected] = useState(false);
    const toggle = () => {
        if (selected) {
        return setSelected(false);
        }

        setSelected(true);
    };

    return (
        <Wrapper>
          <Accordion>
              <Item>
                <TitleWrapper onClick={() => toggle()}>
                  <Title>Description</Title>
                  {selected ? (
                    <img src={OpenArrow} alt="opened arrow" />
                  ) : (
                    <img src={CloseArrow} alt="closed arrow" />
                  )}
                </TitleWrapper>
                <Content className={selected && "content show"}>
                  <ContentText>{description}</ContentText>
                </Content>
              </Item>
          </Accordion>
        </Wrapper>
      );
}