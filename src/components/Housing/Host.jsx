import styled from "styled-components"
import { devices } from "../../utils/sizes"

const HostContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 450px;
    gap: 10px;

    @media ${devices.mobile} {
        max-width: 100px;
      } 
`

const HostName = styled.p`
    font-size: 18px;
    text-align: right;
    width: 100px;
    color: #FF6060;

    @media ${devices.mobile} {
        font-size: 12px;
      }  
`

const HostPicture = styled.img`
    border-radius: 50px;
    width: 64px;
    height: 64px;

    @media ${devices.mobile} {
        width: 32px;
        height: 32px;
      } 
`

export default function Host({host}) {
    return (
        <HostContainer>
            <HostName>{host.name}</HostName>
            <HostPicture src={host.picture} alt='host profile picture'></HostPicture>
        </HostContainer>
    )
}