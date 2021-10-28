import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Image from "../Image";
import pictures from "../../constants/picturesMobile";
import {map, reverse} from "ramda";

const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px auto 1fr;
  gap: 5px;
`

const HeaderWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

const FooterWrapper = styled.div`
  grid-area: 4 / 1 / 4 / 3;
`

const BodyWrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 20px;
  padding-bottom: 16px;
  background-color: ${({theme}) => theme.miaRed};
  grid-area: 3 / 1 / 3 / 4;
`

const _template = () => {
  return (
    <Layout>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <BodyWrapper>
        {reverse(map((picture, key) => <Image src={picture} key={key}/>, pictures))}
      </BodyWrapper>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </Layout>
  )
};

export default _template;
