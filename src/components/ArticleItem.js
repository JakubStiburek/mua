import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import formatDate from "../utils/formatDate";

const ArticleItem = ({title, id, createdAt, topic}) => {
  const link = `/clanky/${id}`
  return (
    <Link to={link}>
      <Flex direction="column">
        <Heading size="sm">
          {title}
        </Heading>
        <Flex justify="flex-start">
          <Text fontSize="xs">{formatDate(createdAt)}</Text>
          <Box w="5px"/>
          <Text fontSize="xs">{"#" + topic}</Text>
        </Flex>
      </Flex>
    </Link>
  )
};

export default ArticleItem;
