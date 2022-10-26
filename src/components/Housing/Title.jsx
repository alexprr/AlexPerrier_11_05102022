import styled from "styled-components";
import { devices } from "../../utils/sizes";

const TitleContainer = styled.div`
    max-width: 600px;
    color: #FF6060;
    margin: 0;
`

const TitleText = styled.h1`
    margin: 0 0 10px;
    font-size: 36px;
    font-weight: 500;

    @media ${devices.medium} {
        font-size: 18px;
    }
`

const Location = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: 500;

    @media ${devices.medium} {
        font-size: 14px;
    }
`

export default function Title({ title, location}) {
    return (
        <TitleContainer>
            <TitleText>{title}</TitleText>
            <Location>{location}</Location>
        </TitleContainer>
    )
}