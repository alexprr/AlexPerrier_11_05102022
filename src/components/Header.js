import Logo from "../assets/logo.png";
import styled from "styled-components";
import { devices } from "../utils/sizes";

const Nav = styled.header`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 100px;

  @media ${devices.medium} {
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

  @media ${devices.medium} {
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

const NavListLink = styled.a`
  color: #ff6060;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #ff6060;
  }
`;

function Header() {
  return (
    <Nav>
      <img src={Logo} alt="logo Kasa" />
      <NavList>
        <NavListItem>
          <NavListLink href="http://localhost:3000/">Accueil</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink href="http://localhost:3000/">A Propos</NavListLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default Header;
