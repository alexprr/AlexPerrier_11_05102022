// React Hooks
import { useState } from 'react'

// Styled Components
import styled from "styled-components";

// Custom CSS
import "../../styles/Accordion.css";

// Utils
import { devices } from "../../utils/sizes";

// Assets
import OpenArrow from "../../assets/icons/open-arrow.svg"
import CloseArrow from "../../assets/icons/close-arrow.svg"

export const AccordionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1240px;
  margin: 24px 80px 200px 0;
  ${(props) => 
    props.isLarge && 
    `margin: 0 auto 20px; justify-content: center;`}

  @media ${devices.tablet} {
    margin: 24px 0 0 0;
    width: 100%
  }  

  @media ${devices.medium} {
    margin: 24px 0 0 0;
  }
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 582px;
  ${(props) => 
    props.isLarge && `width: 1024px;`}

    @media ${devices.tablet} {
      margin: 0 20px;
      width: 100%
    } 
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
  ${(props) => 
    props.isLarge && `font-size: 24px;`}

  @media ${devices.medium} {
    font-size: 13px;
  }
`;

export const Content = styled.div`
  display: none;
  padding: 30px 20px 10px;
  height: 249px;
  ${(props) => 
    props.isLarge && `height: auto; padding: 30px 20px 20px;`}

    @media ${devices.medium} {
      height: auto;
      padding: 25px 20px;
    }
`;

const ContentText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  color: #ff6060;
  ${(props) => 
    props.isLarge && `font-size: 24px;`}

  @media ${devices.medium} {
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

export default function Accordion({title, description, type}) {
    const [selected, setSelected] = useState(false);
    const toggle = () => {
        if (selected) {
        return setSelected(false);
        }

        setSelected(true);
    };

    return (
      <>
      {type === "large" ? 
      <AccordionWrapper isLarge>
          <AccordionContainer isLarge>
              <Item>
                <TitleWrapper onClick={() => toggle()}>
                  <Title isLarge>{title}</Title>
                  {selected ? (
                    <img src={OpenArrow} alt="opened arrow" />
                  ) : (
                    <img src={CloseArrow} alt="closed arrow" />
                  )}
                </TitleWrapper>
                <Content isLarge className={selected && "content show"}>
                  <ContentText isLarge>{description}</ContentText>
                </Content>
              </Item>
          </AccordionContainer>
      </AccordionWrapper>
      : <AccordionWrapper>
      <AccordionContainer>
          <Item>
            <TitleWrapper onClick={() => toggle()}>
              <Title>{title}</Title>
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
      </AccordionContainer>
    </AccordionWrapper>}
    </>
    )}