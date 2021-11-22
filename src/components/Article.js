import {Box, Container, Heading, Image, Text} from "@chakra-ui/react";
import {URL} from "../urls";
import ReactMarkdown from "react-markdown";
import mapIndexed from "../utils/mapIndexed";

const Article = ({title, topic, content, createdAt, coverUrl, media}) => {
  const images = mapIndexed((item, key) => <Image src={`${URL.RENDER_URL}${item.url}`} w="260px" key={key}/>, media)

  return (
    <Container maxW="md" centerContent>
      <Heading size="md" fontWeight={100}>{title}</Heading>
      <Image src={`${URL.RENDER_URL}${coverUrl}`} w="260px"/>
      <Box w={260}>
        <Box fontSize="xs" align="justify"><ReactMarkdown children={content}/></Box>
        <Text fontSize="xs">{`#${topic}`}</Text>
        <Text fontSize="xs">{createdAt}</Text>
        {images}
      </Box>
    </Container>
  )
};

export default Article;
