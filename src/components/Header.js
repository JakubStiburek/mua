import {StyledLink} from "./StyledLink";
import Logo from "./Logo";
import MuaBanner from "./MuaBanner";
import Burger from "./Burger";
import Menu from "./Menu";
import styled from "styled-components";
import {useState} from "react";

const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px;
  gap: 5px;
`

const LogoWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 4;
`

const BannerWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`

const BurgerWrapper = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  background: ${({ theme }) => theme.miaRed};
`

const Header = () => {
  const [burgerState, setBurgerState] = useState(false)

  const toggleBurger = () => {
    burgerState ? setBurgerState(false) : setBurgerState(true);
  }

  return (
  <Layout>
    <LogoWrapper>
      <StyledLink to="/">
        <Logo>SOLOMIJA STIBŮRKOVÁ</Logo>
      </StyledLink>
    </LogoWrapper>
    <BannerWrapper>
      <MuaBanner>Profesionální vizážistka & make-up artist</MuaBanner>
    </BannerWrapper>
    <BurgerWrapper onClick={toggleBurger}>
      <Burger open={burgerState}/>
    </BurgerWrapper>
    {burgerState && <Menu/>}
  </Layout>
  )
};

export default Header;
