import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import {StyledText} from "../components/StyledText";
import {URL, ENDPOINT} from "../urls";
import Loader from "react-loader-spinner";
import common from "../localization/common";

const About = () => {
  const {isLoading, error, data} = useQuery("repoData", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.ABOUT_ME}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Center h="400px">
        <Loader
          type="Grid"
          color="#FFF4F5"
          height={50}
          width={50}
        />
      </Center>
    </DefaultLayout>
  )

  if (error) return (
    <DefaultLayout>
      <Center w="260px">
        <Text fontSize="sm">
          <StyledText>{`${common.error} ${error.message}`}</StyledText>
        </Text>
      </Center>
    </DefaultLayout>
  )

  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>
        {data.title}
      </Heading>
      <Box h="10px"/>
      <Image src={`${URL.RENDER_URL}${data.portrait.url}`} w={data.portrait.width} h={data.portrait.height}
             borderRadius="50px"/>
      <Box h="20px"/>
      <Center w="260px">
        <Text fontSize="sm" align="justify">{data.content}</Text>
      </Center>
    </DefaultLayout>
  )
};

export default About;
