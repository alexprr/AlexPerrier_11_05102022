import styled from "styled-components"
import { useState } from 'react'
import OpenArrow from "../../assets/icons/open-arrow.svg"
import CloseArrow from "../../assets/icons/close-arrow.svg"
import { Wrapper, Accordion, Item, TitleWrapper, Title, Content } from "./Description";

const EquipmentContent = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #FF6060;
    font-size: 18px;
    font-weight: 400;
`;


export default function Equipments({equipments}) {
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
                  <Title>Équipements</Title>
                  {selected ? (
                    <img src={OpenArrow} alt="opened arrow" />
                  ) : (
                    <img src={CloseArrow} alt="closed arrow" />
                  )}
                </TitleWrapper>
                <Content className={selected && "content show"}>
                  <EquipmentContent>
                    {equipments}
                    </EquipmentContent>
                </Content>
              </Item>
          </Accordion>
        </Wrapper>
      );
}