import styled from "styled-components"
import '../../styles/Ratings.css'

const StarContainer = styled.div`
    display: flex;
    align-items: center;
`

export default function Ratings({rating, state}) {

    const stars = new Array(5).fill().map((star, index) => (
        (rating > index) ? 'filled' : 'empty'
    ))

    return (
        <StarContainer>
            {stars.map((star, index) => (
                <div key={index} className={star}></div>
            ))}
        </StarContainer>
    )
}