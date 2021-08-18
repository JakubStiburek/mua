import styled, {keyframes} from "styled-components";
import {StyledLink} from "./StyledLink";

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`

const MenuList = styled.ul`
  text-align: center;
  background: ${({ theme }) => theme.miaRed};
  position: absolute;
  list-style: none;
  width: 312px;
  height: 416px;
  padding: unset;
  margin: unset;
  top: 245px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 5px solid ${({ theme }) => theme.miaWhite};
  animation: ${fadeIn} 0.3s;
`

const MenuStyledLink = styled(StyledLink)`
  font-size: 24px;
  line-height: 32px;
`

const links = [
  <MenuStyledLink to="/about">O mně</MenuStyledLink>,
  <MenuStyledLink to="/sluzby">Služby & ceník</MenuStyledLink>,
  <MenuStyledLink to="/rezervace">Rezervace</MenuStyledLink>,
  <MenuStyledLink to="/galerie">Galerie</MenuStyledLink>,
  <MenuStyledLink to="/kontakt">Kontakt</MenuStyledLink>,
  <MenuStyledLink to="/">Home</MenuStyledLink>
]

const listLinks = (links) => {
  return links.map((link, key) => {
    return <li key={key}>{link}</li>;
  })
}
const Menu = () => {
  return (
    <MenuList>
      {listLinks(links)}
    </MenuList>
  )
};

export default Menu;
