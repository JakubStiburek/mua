import {Box, Center, Flex, Heading, Image, Text} from "@chakra-ui/react";
import Caret from "./Caret";
import {URL} from "../urls";
import {useState} from "react";
import CaretOpen from "./CaretOpen";

const Product = ({product}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <Box>
      <Flex onClick={handleClick} w="260px" justify="flex-start" direction="row">
        {open === false ? <Caret/> : <CaretOpen/>}
        <Box w="5px"/>
        <Heading size="md" fontWeight={100}>{product.title}</Heading>
      </Flex>
      <Box h="5px"/>
      {open &&
      <Box>
        <Image src={`${URL.RENDER_URL}${product.cover.url}`} w="260px"/>
        <Box h="5px"/>
        <Center w="260px">
          <Text fontSize="sm" align="justify">{product.description}</Text>
        </Center>
        <Box h="5px"/>
        <Flex justify="flex-start">
          <Text fontSize="lg">{`${product.price} Kč`}</Text>
          {/* TODO doplnit button na rezervaci nebo kontakty */}
        </Flex>
      </Box>}
    </Box>
  )
};

export default Product;
