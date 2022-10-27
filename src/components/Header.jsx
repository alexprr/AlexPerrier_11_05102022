//  React Router
import { Link, useLocation } from "react-router-dom";

// Styled Components
import styled from "styled-components";

// Assets
import Logo from "../assets/logo.png";

// Utils
import { devices } from "../utils/sizes";

import "../styles/Header.css";

const Nav = styled.header`
  max-width: 1240px;
  margin: 40px auto;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${devices.tablet} {
    margin: 20px;
    gap: 0 50px;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 60px;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media ${devices.mobile} {
    gap: 0 10px;
  }
`;

const NavListItem = styled.li`
  font-size: 24px;

  @media ${devices.mobile} {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

function Header() {
  const { pathname } = useLocation()

  return (
    <Nav>
      <img src={Logo} alt="logo Kasa" />
      <NavList>
        <NavListItem>
          <Link to="/" className={pathname === '/' ? "nav-list-link active" : "nav-list-link"}>
            Accueil
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/about" className={pathname === '/about' ? "nav-list-link active" : "nav-list-link"}>
            A Propos
          </Link>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default Header;
