import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Image from "../Image";
import pictureOne from "../../media/1.jpg";
import pictureTwo from "../../media/2.jpg";
import pictureThree from "../../media/3.jpg";
import pictureFour from "../../media/4.jpg";
import pictureFive from "../../media/5.jpg";
import pictureSix from "../../media/6.jpg";
import pictureSeven from "../../media/7.jpg";
import pictureEight from "../../media/8.jpg";
import pictureNine from "../../media/9.jpg";
import pictureTen from "../../media/10.jpg";
import pictureEleven from "../../media/11.jpg";
import pictureTwelve from "../../media/12.jpg";

const pictures = [
  pictureOne,
  pictureTwo,
  pictureThree,
  pictureFour,
  pictureFive,
  pictureSix,
  pictureSeven,
  pictureEight,
  pictureNine,
  pictureTen,
  pictureEleven,
  pictureTwelve
]

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
  padding-bottom: 10px;
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
        {pictures.map((picture, key) => <Image src={picture} key={key}/>)}
      </BodyWrapper>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </Layout>
  )
};

export default _template;
