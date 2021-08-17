import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.ul`
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
`

const StyledLink = styled(Link)`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.miaWhite};
  text-decoration: none;
`

const links = [
  <StyledLink to="/about">O mně</StyledLink>,
  <StyledLink to="/sluzby">Služby & ceník</StyledLink>,
  <StyledLink to="/rezervace">Rezervace</StyledLink>,
  <StyledLink to="/galerie">Galerie</StyledLink>,
  <StyledLink to="/kontakt">Kontakt</StyledLink>,
  <StyledLink to="/">Home</StyledLink>
]

const listLinks = (links) => {
  return links.map((link, key) => {
    return <li key={key}>{link}</li>;
  })
}
const Menu = () => {
  return (
    <Wrapper>
      {listLinks(links)}
    </Wrapper>
  )
};

export default Menu;
