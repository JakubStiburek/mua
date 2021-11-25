import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Box, Center, Container, Flex, Heading, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import articles from "../localization/articles";
import mapIndexed from "../utils/mapIndexed";
import ArticleItem from "../components/ArticleItem";

const Articles = () => {
  const {isLoading, error, data} = useQuery("services", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.ARTICLES}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{articles.title}</Heading>
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
        <Text fontSize="sm" align="center">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  const renderArticleItems = mapIndexed((item, key) => <ArticleItem title={item.title} id={item.id} createdAt={item.created_at} topic={item.topic} key={key} />, data)


  return (
    <DefaultLayout>
      <Container centerContent minH="420px">
        <Heading size="xl" fontWeight={100}>{articles.title}</Heading>
        <Box h="10px"/>
        <Flex direction="column" align="left" justify="space-evenly" minH="200px">
        {renderArticleItems}
        </Flex>
      </Container>
    </DefaultLayout>
  )
};

export default Articles;
