import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Layout = styled.div`
  margin: auto;
  width: 312px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 105px 1fr 1fr 1fr 1fr;
  gap: 5px;
`

const HeaderWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

const FooterWrapper = styled.div`
  grid-area: 6 / 1 / 6 / 3;
`

const Reservation = () => {
  return (
    <Layout>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      Reservartion
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </Layout>
  )
};

export default Reservation;
