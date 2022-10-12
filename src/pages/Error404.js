import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/Error404.css";

function Error404() {
  const oups = "Oups! La page que vous demandez n'existe pas.";
  const errorType = "404";
  return (
    <div>
      <Header />
      <div className="error-msg-container">
        <p className="error-msg-404">{errorType}</p>
        <p className="error-msg-details">{oups}</p>
      </div>
      <p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
}

export default Error404;
