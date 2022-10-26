// React Hooks
import {useState} from 'react'

// Styled Components
import styled from 'styled-components'

// Assets
import LeftArrow from "../../assets/icons/left-arrow.svg"
import RightArrow from "../../assets/icons/right-arrow.svg"

// Utils 
import {devices} from '../../utils/sizes'

const Container = styled.div`
    max-width: 1240px;
    height: 415px;
    margin: 0 auto 30px;
    position: relative;
`

const Steps = styled.p`
    position: absolute;
    bottom: 0;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
`

const LeftController = styled.img`
    position: absolute;
    top: 50%;
    left: 32px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
    transform: translateY(-50%);

    @media ${devices.medium} {
        width: 24px;
        height: 24px;
      }
` 
const RightController = styled.img`
    position: absolute;
    top: 50%;
    right: 32px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
    transform: translateY(-50%);

    @media ${devices.medium} {
        width: 24px;
        height: 24px;
      }
` 

export default function Carrousel({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentIndexInt = parseInt(currentIndex + 1);

    const Slider = {
        width: '100%',
        height: '100%',
        borderRadius: '25px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${pictures[currentIndex]})`,
    }
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

  return (
    <Container>
        <LeftController src={LeftArrow} alt='left controller' onClick={goToPrevious}/>
        <RightController src={RightArrow} alt='right controller' onClick={goToNext}/>
        {currentIndexInt === pictures.length 
            ? <Steps>{`${pictures.length}/ ${pictures.length}`}</Steps> 
            : <Steps>{`${currentIndexInt}/ ${pictures.length}`}</Steps>
        }
        <div style={Slider}></div>
    </Container>
  )
}
