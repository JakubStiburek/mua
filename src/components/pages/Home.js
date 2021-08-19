import Banner from "../Banner";
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

const ServiceBanner = styled.div`
  grid-area: 3 / 3 / 6 / 3;
`

const GalleryWrapper = styled.div`
  grid-area: 3 / 1 / 7 / 3;
`

const FooterWrapper = styled.div`
  grid-area: 6 / 1 / 6 / 3;
`

const Home = () => {

  return (
    <Layout>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <ServiceBanner>
        <Banner/>
      </ServiceBanner>
      <GalleryWrapper>
        <div className="gallery">gallery</div>
      </GalleryWrapper>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </Layout>
  )
};

export default Home;
