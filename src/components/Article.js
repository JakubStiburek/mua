import {Container, Heading, Image, Text} from "@chakra-ui/react";
import {StyledHeading3} from "./StyledHeading";
import {URL} from "../urls";
import {map} from "ramda";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${({ theme }) => theme.miaWhite};
  font-family: 'Archivo', sans-serif;
  font-weight: 100;
  text-align: justify;
  margin: 0;
  width: 260px;
`

const Article = ({title, topic, content, createdAt, coverUrl, media}) => {
  const images = map((item) => <Image src={`${URL.RENDER_URL}${item.url}`} w="260px" />, media)

  return (
    <Container maxW="md" centerContent>
      <Heading size="md">
        <StyledHeading3>{title}</StyledHeading3>
      </Heading>
      <Image src={`${URL.RENDER_URL}${coverUrl}`} w="260px"/>
      <Text fontSize="xs">
        <StyledText>
          <ReactMarkdown children={content} />
        </StyledText>
      </Text>
      <Text fontSize="xs">
        <StyledText>{`#${topic}`}</StyledText>
      </Text>
      <Text fontSize="xs">
        <StyledText>{createdAt}</StyledText>
      </Text>
      {images}
    </Container>
  )
};

export default Article;
