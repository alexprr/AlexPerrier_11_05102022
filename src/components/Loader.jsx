// Styled Components
import styled from "styled-components";

// Utils
import { Loading } from "../utils/loading";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-bottom: 100px;
`;

const LoadingMessage = styled.p`
  font-size: 48px;
`;

export default function Loader() {
    return (
    <LoadingContainer>
        <LoadingMessage>Patience ça arrive... 👍</LoadingMessage>
        <Loading />
    </LoadingContainer>
    )
}