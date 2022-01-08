import {Badge, Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {URL} from "../urls";
import ReactMarkdown from "react-markdown";
import mapIndexed from "../utils/mapIndexed";
import formatDate from "../utils/formatDate";

const Article = ({title, topic, content, createdAt, coverUrl, media}) => {
  const images = mapIndexed((item, key) => {
    return (
      <Box padding="5px" key={key}>
        <Image src={`${URL.RENDER_URL}${item.url}`} w="100%" key={key}/>
      </Box>
    )
  }, media)

  return (
    <VStack w={[265, 340, 595, 670]}>
      <VStack>
        <Heading size="xl" fontWeight={100}>{title}</Heading>
        <Box h="10px"/>
        <Image src={`${URL.RENDER_URL}${coverUrl}`} w="100%"/>
      </VStack>
      <Box h="10px"/>
      <Box>
        <Box fontSize="xs" align="justify"><ReactMarkdown className="markdown article" children={content}/></Box>
        <Box h="10px"/>
        <HStack justify="center">
          <Badge colorScheme="green">
            <Text fontSize={["xs", "xs", "md", "xl"]}>{formatDate(createdAt)}</Text>
          </Badge>
          <Badge colorScheme="red">
            <Text fontSize={["xs", "xs", "md", "xl"]}>{`#${topic}`}</Text>
          </Badge>
        </HStack>
        <Box h="10px"/>
        {images}
      </Box>
    </VStack>
  )
};

export default Article;
