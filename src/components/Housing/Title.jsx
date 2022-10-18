import styled from "styled-components";

const TitleContainer = styled.div`
    max-width: 600px;
    color: #FF6060;
    margin: 0;
`

const TitleText = styled.h1`
    margin: 0;
    font-size: 36px;
    font-weight: 500;
`

const Location = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
`

export default function Title({ title, location}) {
    return (
        <TitleContainer>
            <TitleText>{title}</TitleText>
            <Location>{location}</Location>
        </TitleContainer>
    )
}