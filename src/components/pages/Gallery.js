import Logo from "../Logo";
import MuaBanner from "../MuaBanner";
import Burger from "../Burger";
import Menu from "../Menu";
import {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.miaWhite};
  text-decoration: none;
`

const LogoWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 4;
`

const BannerWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`

const BurgerWrapper = styled.div`
  background: ${({ theme }) => theme.miaRed};
  grid-area: 2 / 3 / 3 / 4;
`

const Gallery = () => {
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
      {burgerState ? <Menu/> : null}
      <BurgerWrapper onClick={toggleBurger}>
        <Burger open={burgerState}/>
      </BurgerWrapper>
      GALLERY
    </Layout>
  )
};

export default Gallery;
