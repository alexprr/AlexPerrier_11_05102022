import { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../styles/Card.css";
import { devices } from "../../utils/sizes";
import { Loader } from "../../utils/Loader";

const CardsContainer = styled.div`
  display: grid;
  max-width: 1140px;
  padding: 56px 50px;
  gap: 50px 60px;
  margin: 45px auto;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  justify-items: center;
  align-items: center;
  background: #f7f7f7;
  border-radius: 25px;

  @media ${devices.tablet} {
    margin: 45px 20px;
  }

  @media ${devices.medium} {
    margin: 22px 20px;
  }
`;

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

function Gallery() {
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
      <CardsContainer>
        {data.map((item) => (
          <Link key={item.id} to="blabla" className="card-link">
            <Card key={item.id} title={item.title} cover={item.cover} />
          </Link>
        ))}
      </CardsContainer>
    );
  }
}

export default Gallery;
