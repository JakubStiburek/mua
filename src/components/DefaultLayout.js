import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px auto 1fr;
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

export const HeaderWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

export const FooterWrapper = styled.div`
  grid-area: 4 / 1 / 4 / 3;
`

export const BodyWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: ${({theme}) => theme.miaRed};
  grid-area: 3 / 1 / 3 / 4;
`

const DefaultLayout = (props) => (
  <Layout>
    <HeaderWrapper>
      <Header/>
    </HeaderWrapper>
    <BodyWrapper>
      {props.children}
    </BodyWrapper>
    <FooterWrapper>
      <Footer/>
    </FooterWrapper>
  </Layout>
)

export default DefaultLayout;
