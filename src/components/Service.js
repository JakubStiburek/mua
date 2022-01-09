import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const Service = ({product}) => (
  <Box w={[270, 345, 600, 770]}>
    <Flex justify="space-between">
      <Heading size="sm" fontSize={["1em", "1.5em", "2em"]}>{product.title}</Heading>
      {product.priceMax ?
        <Text fontSize={["sm", "md", "xl"]}>{`${product.price} až ${product.priceMax} Kč`}</Text> :
        product.price && <Text fontSize={["sm", "md", "xl"]}>{`${product.price} Kč`}</Text>}
    </Flex>
    <ReactMarkdown className="markdown">{product.description}</ReactMarkdown>
    <Box h={10}/>
  </Box>
)

export default Service;
