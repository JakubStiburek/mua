import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const Service = ({product}) => {
  return (
    <Box w={270}>
      <Flex justify="space-between">
        <Heading size="sm">{product.title}</Heading>
        {product.priceMax ?
          <Text fontSize="sm">{`${product.price} až ${product.priceMax} Kč`}</Text> :
          product.price && <Text fontSize="sm">{`${product.price} Kč`}</Text>}
      </Flex>
      <ReactMarkdown>{product.description}</ReactMarkdown>
      <Box h={10}/>
    </Box>
  )
};

export default Service;
