import styled from "styled-components";
import {StyledLink} from "./StyledLink";
import {useSpring, animated} from "react-spring";
import menu from "../localization/menu";

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
  &:hover {
    color: ${({ theme }) => theme.miaYellow};
  }
`

const { about, services, reservation, gallery, contacts, home } = menu;

const links = [
  <MenuStyledLink to="/about">{about}</MenuStyledLink>,
  <MenuStyledLink to="/sluzby">{services}</MenuStyledLink>,
  <MenuStyledLink to="/rezervace">{reservation}</MenuStyledLink>,
  <MenuStyledLink to="/galerie">{gallery}</MenuStyledLink>,
  <MenuStyledLink to="/kontakt">{contacts}</MenuStyledLink>,
  <MenuStyledLink to="/">{home}</MenuStyledLink>
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
