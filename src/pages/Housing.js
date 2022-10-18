import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Loader } from "../utils/Loader";
import {
  LoadingContainer,
  LoadingMessage,
} from "../components/Homepage/Gallery";
import Carrousel from "../components/Housing/Carrousel";
import Title from "../components/Housing/Title";
import Host from "../components/Housing/Host";
import Footer from "../components/Footer";

const GlobalContainer = styled.div`
  max-width: 1240px;
  height: 415px;
  margin: 0 auto 12rem;
`;

const DetailsContainer = styled.div`
  max-width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

function Housing() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/housing.json").then((res) =>
      res.json().then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    );
  }, []);

  if (error) {
    return <div>Erreur: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <LoadingContainer>
        <LoadingMessage>Patience ça arrive... 👍</LoadingMessage>
        <Loader />
      </LoadingContainer>
    );
  } else {
    return (
      <>
        <Header />

        {data
          .filter((house) => house.id === id)
          .map(({ id, title, location, host, pictures }) => (
            <GlobalContainer key={id}>
              <Carrousel pictures={pictures} />
              <DetailsContainer>
                <Title title={title} location={location} />
                <Host host={host} />
              </DetailsContainer>
            </GlobalContainer>
          ))}

        <Footer />
      </>
    );
  }
}

export default Housing;
