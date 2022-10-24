import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Error404.css";
import { devices } from "../utils/sizes";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  color: #ff6060;
  margin: 100px auto;

  @media ${devices.mobile} {
    margin: 200px 24px;
  }
`;

const ErrorText404 = styled.p`
  font-size: 288px;
  font-weight: 700;
  margin: 0;

  @media ${devices.tablet} {
    font-size: 150px;
  }

  @media ${devices.mobile} {
    font-size: 96px;
  }
`;

const ErrorTextDetails = styled.p`
  font-size: 36px;

  @media ${devices.tablet} {
    font-size: 24px;
  }

  @media ${devices.mobile} {
    font-size: 18px;
  }
`;

const RedirectionContainer = styled.p`
  margin: 200px 0;
`;

function Error404() {
  const oups = "Oups! La page que vous demandez n'existe pas.";
  const errorType = "404";
  return (
    <div>
      <Header />
      <ErrorContainer>
        <ErrorText404>{errorType}</ErrorText404>
        <ErrorTextDetails>{oups}</ErrorTextDetails>
        <RedirectionContainer>
          <Link to="/" className="homepage-link">
            Retourner sur la page d'accueil
          </Link>
        </RedirectionContainer>
      </ErrorContainer>
      <Footer />
    </div>
  );
}

export default Error404;
