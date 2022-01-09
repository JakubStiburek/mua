import styled from "styled-components";
import {useSpring, animated} from "react-spring";
import menu from "../localization/menu";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {closeMenu} from "../slices/menuSlice";

const AnimatedMenuList = styled(animated.ul)`
  z-index: 1;
  text-align: center;
  background: ${({theme}) => theme.miaRed};
  position: absolute;
  list-style: none;
  width: 312px;
  height: 367px;
  padding: unset;
  margin: unset;
  top: 246px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 5px solid ${({theme}) => theme.miaWhite};
  @media (min-width: 481px) {
    width: 400px;
    top: 261px;
    height: 454px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`

const MenuStyledLink = styled(Link)`
  color: ${({theme}) => theme.miaWhite};
  text-decoration: none;
  font-size: 24px;
  line-height: 32px;

  &:hover {
    color: ${({theme}) => theme.miaYellow};
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`

const links = ["/about", "/sluzby", "/clanky", "/galerie", "/kontakty", "/"]

const listLinks = (links) => {
  return links.map((link, key) => {
    return <li key={key}>{link}</li>;
  })
}

const Menu = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  let currentLinks = links.map(link => {
    if (link !== location) {
      return link;
    } else {
      return undefined;
    }
  })

  currentLinks = currentLinks.filter(link => link !== undefined)

  currentLinks = currentLinks.map(link => {
    if (link === "/") {
      return <MenuStyledLink to={link} onClick={() => dispatch(closeMenu())}>{menu.home}</MenuStyledLink>
    } else {
      return <MenuStyledLink to={link} onClick={() => dispatch(closeMenu())}>{menu[link.slice(1)]}</MenuStyledLink>
    }
  })

  const animationProps = useSpring({to: {opacity: 1}, from: {opacity: 0}})

  return (
    <AnimatedMenuList style={animationProps}>
      {listLinks(currentLinks)}
    </AnimatedMenuList>
  )
};

export default Menu;
