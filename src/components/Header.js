import Logo from "./Logo";
import MuaBanner from "./MuaBanner";
import Burger from "./Burger";
import Menu from "./Menu";
import styled from "styled-components";
import header from "../localization/header";
import {useDispatch, useSelector} from "react-redux";
import {closeMenu, toggleMenu} from "../slices/menuSlice";
import {Link} from "react-router-dom";

const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px;
  gap: 5px;
  @media (min-width: 481px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`

const LogoWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  @media (min-width: 481px) {
    height: 151px;
  }
`

const BannerWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`

const BurgerWrapper = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  background: ${({theme}) => theme.miaRed};
`

const StyledLink = styled(Link)`
  color: ${({theme}) => theme.miaWhite};
  text-decoration: none;
`

const Header = () => {
  const burgerState = useSelector((state) => state.menu.open)
  const {logo, muaBanner} = header;
  const dispatch = useDispatch();

  return (
    <Layout>
      <LogoWrapper>
        <StyledLink to="/" onClick={() => dispatch(closeMenu())}>
          <Logo>{logo}</Logo>
        </StyledLink>
      </LogoWrapper>
      <BannerWrapper>
        <MuaBanner>{muaBanner}</MuaBanner>
      </BannerWrapper>
      <BurgerWrapper onClick={() => dispatch(toggleMenu())}>
        <Burger open={burgerState}/>
      </BurgerWrapper>
      {burgerState && <Menu/>}
    </Layout>
  )
};

export default Header;
