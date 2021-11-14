import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import styled from "styled-components";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import {StyledText} from "../components/StyledText";
import {StyledHeading} from "../components/StyledHeading";
import {URL, ENDPOINT} from "../urls";

const JustifiedText = styled(StyledText)`
  text-align: justify;
`

const About = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.ABOUT_ME}`
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>{data.title}</StyledHeading>
      </Heading>
      <Box h="10px" />
      <Image src={`${URL.RENDER_URL}${data.portrait.url}`} w="260px"/>
      <Box h="10px" />
      <Center w="260px">
        <Text fontSize="sm">
          <JustifiedText>{data.content}</JustifiedText>
        </Text>
      </Center>
    </DefaultLayout>
  )
};

export default About;
