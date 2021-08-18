import Logo from "../Logo";
import MuaBanner from "../MuaBanner";
import MenuBanner from "../MenuBanner";
import Burger from "../Burger";
import Menu from "../Menu";
import { useState } from "react";
import styled from "styled-components";
import { StyledLink } from "../StyledLink";

const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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

const MenuBannerWrapper = styled.div`
  grid-area: 2 / 3 / 7 / 4;
`

const GalleryWrapper = styled.div`
  grid-area: 3 / 1 / 7 / 3;
`

const ReservationWrapper = styled.div`
  grid-area: 7 / 1 / 13 / 4;
`

const Home = () => {
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
      <MenuBannerWrapper>
        <MenuBanner/>
      </MenuBannerWrapper>
      {burgerState && <Menu/>}
      <BurgerWrapper onClick={toggleBurger}>
        <Burger open={burgerState}/>
      </BurgerWrapper>
      <GalleryWrapper>
        <div className="gallery">gallery</div>
      </GalleryWrapper>
      <ReservationWrapper>
        <div className="reservation">reservation</div>
      </ReservationWrapper>
    </Layout>
  )
};

export default Home;
