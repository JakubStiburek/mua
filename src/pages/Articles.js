import {useQuery} from "react-query";
import {ENDPOINTS} from "../constants/urls";
import {Box, Center, Container, Heading, Text, VStack} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import articles from "../localization/articles";
import mapIndexed from "../utils/mapIndexed";
import ArticleItem from "../components/ArticleItem";
import {useContext} from "react";
import {ColorThemeContext} from "../App";
import Filter from "../components/Filter";
import {useSelector} from "react-redux";
import {filter, indexOf, keys, values} from "ramda";
import PageLayout from "../components/PageLayout";
import DefaultLayout from "../components/DefaultLayout";
import fetchPageData from "../utils/fetchPageData";

const Articles = () => {
  const {miaWhite} = useContext(ColorThemeContext);

  const selectedTopic = useSelector((state) => state.filter.selected)

  const translateTopic = (topics, selectedTopic) => {
    return keys(topics)[indexOf(selectedTopic, values(topics))]
  }

  const filterByTopic = (data, selectedTopic) => {
    return selectedTopic === "all" ? data : filter((item) => item.topic === translateTopic(articles.topics, selectedTopic), data)
  }

  const {isLoading, error, data} = useQuery("services", () => fetchPageData(ENDPOINTS.ARTICLES));

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{articles.title}</Heading>
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
        <Text fontSize="sm" align="center">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  const renderArticleItems = mapIndexed((item, key) =>
    <ArticleItem title={item.title} id={item.id} createdAt={item.created_at} topic={item.topic} key={key}/>, filterByTopic(data, selectedTopic))

  return (
    <PageLayout>
      <Box minH="420px">
        <Container centerContent>
          <Heading size="xl" fontWeight={100}>{articles.title}</Heading>
          <Box h="10px"/>
          <Filter/>
          <Box h="10px"/>
        </Container>
        <VStack direction="column" align="flex-start">
          {renderArticleItems}
        </VStack>
      </Box>
    </PageLayout>
  )
};

export default Articles;
