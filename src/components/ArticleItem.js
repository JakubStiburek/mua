import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import formatDate from "../utils/formatDate";
import articles from "../localization/articles";

const ArticleItem = ({title, id, createdAt, topic}) => {
  const link = `/clanek/${id}`
  return (
    <Link to={link}>
      <Flex direction="column">
        <Heading size="sm">
          {title}
        </Heading>
        <Flex justify="flex-start">
          <Text fontSize="xs">{formatDate(createdAt)}</Text>
          <Box w="5px"/>
          <Text fontSize="xs">{"#" + articles.topics[topic]}</Text>
        </Flex>
      </Flex>
    </Link>
  )
};

export default ArticleItem;
