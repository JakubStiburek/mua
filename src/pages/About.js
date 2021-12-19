import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import {URL, ENDPOINT} from "../urls";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import ReactMarkdown from "react-markdown";
import {useContext} from "react";
import {ColorThemeContext} from "../App";

const About = () => {
  const {miaWhite} = useContext(ColorThemeContext);
  const {isLoading, error, data} = useQuery("about", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.ABOUT_ME}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Center h="400px">
        <Loader
          type="Grid"
          color={miaWhite}
          height={50}
          width={50}
        />
      </Center>
    </DefaultLayout>
  )

  if (error) return (
    <DefaultLayout>
      <Center w="260px">
        <Text fontSize="sm">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  console.log(data.content)

  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>
        {data.title}
      </Heading>
      <Box h="10px"/>
      <Image src={`${URL.RENDER_URL}${data.portrait.url}`} w={data.portrait.width} borderRadius="50px"/>
      <Box h="20px"/>
      <Center w="260px" fontSize="sm" align="justify">
        <ReactMarkdown children={data.content} />
      </Center>
    </DefaultLayout>
  )
};

export default About;
