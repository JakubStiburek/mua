import {Container, Heading, Image, Text} from "@chakra-ui/react";
import {StyledHeading2} from "./StyledHeading";
import {URL} from "../urls";
import {map, split} from "ramda";
import {StyledText} from "./StyledText";

const Article = ({title, topic, content, createdAt, coverUrl, media}) => {
  const paragraphs = split("\n\n", content);
  const mapParagraphs = (paragraphs) => map((paragraph) => {
    return (
      <Text fontSize="sm">
        <StyledText>{paragraph}</StyledText>
      </Text>
    )
  }, paragraphs)
  const mapMedia = (media) => map((item) => <Image src={`${URL.RENDER_URL}${item.url}`} w="260px" />, media)

  return (
    <Container maxW="md" centerContent>
      <Heading size="xl">
        <StyledHeading2>{title}</StyledHeading2>
      </Heading>
      <Image src={`${URL.RENDER_URL}${coverUrl}`} w="260px"/>
      {mapParagraphs(paragraphs)}
      <Text fontSize="xs">
        <StyledText>{`#${topic}`}</StyledText>
      </Text>
      <Text fontSize="xs">
        <StyledText>{createdAt}</StyledText>
      </Text>
      {mapMedia(media)}
    </Container>
  )
};

export default Article;
