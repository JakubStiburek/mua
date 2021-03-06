import DefaultLayout from "../components/DefaultLayout";
import {useQuery} from "react-query";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import {URL, ENDPOINTS} from "../constants/urls";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import ReactMarkdown from "react-markdown";
import {useContext} from "react";
import {ColorThemeContext} from "../App";
import PageLayout from "../components/PageLayout";
import fetchPageData from "../utils/fetchPageData";

const About = () => {
  const {miaWhite} = useContext(ColorThemeContext);
  const {isLoading, error, data} = useQuery("about", () => fetchPageData(ENDPOINTS.ABOUT_ME));

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

  return (
    <PageLayout>
      <Heading size="xl" fontWeight={100}>
        {data.title}
      </Heading>
      <Box h="10px"/>
      <Image src={`${URL.RENDER_URL}${data.portrait.url}`} w={data.portrait.width} borderRadius="50px"/>
      <Box h="20px"/>
      <Center w="85%" fontSize="sm" align="justify">
        <ReactMarkdown className="markdown" children={data.content} />
      </Center>
    </PageLayout>
  )
};

export default About;
