import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import {StyledHeading} from "../StyledHeading";
import {StyledParagraph} from "../StyledParagraph";
import about from "../../localization/about";

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

const ArticleWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.miaRed};
  grid-area: 3 / 1 / 3 / 4;
`

const ContentWrapper = styled.div`
  margin: 30px 30px 10px 30px;
`

const Heading = styled(StyledHeading)`
  color: ${({ theme }) => theme.miaWhite};
  margin-bottom: 20px;
`

const Paragraph = styled(StyledParagraph)`
  padding-bottom: 20px;
`

const About = () => {
  const { heading, paragraphs } = about;

  const text = paragraphs.map((paragraph, key) => <Paragraph key={key}>{paragraph}</Paragraph>)

  return (
    <Layout>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <ArticleWrapper>
        <ContentWrapper>
          <Heading>{heading}</Heading>
          {text}
        </ContentWrapper>
      </ArticleWrapper>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </Layout>
  )
};

export default About;
