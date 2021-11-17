import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import Caret from "./Caret";
import {StyledHeading2left} from "./StyledHeading";
import styled from "styled-components";
import {StyledText} from "./StyledText";
import {URL} from "../urls";
import {useState} from "react";
import CaretOpen from "./CaretOpen";

const JustifiedText = styled(StyledText)`
  text-align: justify;
`

const StyledFlex = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Product = ({product}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <Box>
      <StyledFlex onClick={handleClick}>
        {open === false ? <Caret/> : <CaretOpen/>}
        <Box w="5px"/>
        <Heading size="md">
          <StyledHeading2left>{product.title}</StyledHeading2left>
        </Heading>
      </StyledFlex>
      <Box h="5px"/>
      {open &&
      <Box>
        <Image src={`${URL.RENDER_URL}${product.cover.url}`} w="260px"/>
        <Box h="5px"/>
        <Center w="260px">
          <Text fontSize="sm">
            <JustifiedText>{product.description}</JustifiedText>
          </Text>
        </Center>
        <Box h="5px"/>
        <StyledFlex>
          <Text fontSize="lg">
            <StyledText>{`${product.price} Kč`}</StyledText>
          </Text>
        </StyledFlex>
      </Box>}
    </Box>
  )
};

export default Product;
