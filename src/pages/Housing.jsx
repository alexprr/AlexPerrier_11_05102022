// React Hooks
import { useState, useEffect } from "react";

// React Router
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Styled Components
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Loader from "../components/Loader";
import Carrousel from "../components/Housing/Carrousel";
import Title from "../components/Housing/Title";
import Host from "../components/Housing/Host";
import Tags from "../components/Housing/Tags";
import Ratings from "../components/Housing/Ratings";
import Accordion from "../components/Housing/Accordion";
import Footer from "../components/Footer";

// Utils
import { devices } from "../utils/sizes";

const GlobalContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto 12rem;

  @media ${devices.tablet} {
    margin: 0 20px;
  }
`;

const DetailsWrapper = styled.div`
  max-width: 1240px;
  display: flex;
  justify-content: space-between;

  @media ${devices.medium} {
    flex-direction: column;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.medium} {
    margin: 20px 0;
    flex-direction: row-reverse;
    
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  align-items: start;

  @media ${devices.tablet} {
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

const TagContent = styled.span`
  min-width: 115px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 10px;
  background: #ff6060;
  color: #fff;
  text-align: center;

  @media ${devices.medium} {
    font-size: 10px;
  }
`;

function Housing() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const housingID = data.some(housing => housing.id === id)
  
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
      <Loader />
    );
  } else if(housingID){
    
    return (
      <>
        <Header />

        {data
          .filter((house) => house.id === id)
          .map(
            ({
              id,
              title,
              location,
              host,
              pictures,
              tags,
              rating,
              description,
              equipments,
            }) => (
              <GlobalContainer key={id}>
                <Carrousel pictures={pictures} />
                <DetailsWrapper>
                  <HeadingContainer>
                    <Title title={title} location={location} />
                    <Tags
                      tags={tags.map((tag) => (
                        <TagContent key={tag}>{tag}</TagContent>
                      ))}
                    />
                  </HeadingContainer>
                  <SubHeadingContainer>
                    <Host host={host} />
                    <Ratings rating={rating} />
                  </SubHeadingContainer>
                </DetailsWrapper>
                <AccordionContainer>
                  <Accordion title="Description" description={description} />
                  <Accordion
                    title="Équipements"
                    description={equipments.map((object) => (
                      <li key={object}>{object}</li>
                    ))}
                  />
                </AccordionContainer>
              </GlobalContainer>
            )
          )}
        <Footer />
      </>
    );
  } else {
    return (
      <Navigate to="/404"/>
    )
  }
}

export default Housing;
