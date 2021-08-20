import styled from "styled-components";
import {StyledLink} from "./StyledLink";
import {useSpring, animated} from "react-spring";

const AnimatedMenuList = styled(animated.ul)`
  z-index: 1;
  text-align: center;
  background: ${({ theme }) => theme.miaRed};
  position: absolute;
  list-style: none;
  width: 312px;
  height: 417px;
  padding: unset;
  margin: unset;
  top: 245px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 5px solid ${({ theme }) => theme.miaWhite};
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
  const animationProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0}})
  return (
    <AnimatedMenuList style={animationProps}>
        {listLinks(links)}
    </AnimatedMenuList>
  )
};

export default Menu;
