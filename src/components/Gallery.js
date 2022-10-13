import { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  max-width: 1240px;
  margin: 45px auto;
  padding: 56px 50px;
  gap: 50px 60px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background: #f7f7f7;
  border-radius: 25px;
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
    return <div>Chargement...</div>;
  } else {
    return (
      <CardsContainer>
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
      </CardsContainer>
    );
  }
}

export default Gallery;
