import styled from 'styled-components'

const TagsContainer = styled.div`
    max-width: 1000px;
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const TagItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0 20px;
`

export default function Tags({tags}) {
  return (
    <TagsContainer>
        <TagItem>{tags}</TagItem>
    </TagsContainer>
  )
}