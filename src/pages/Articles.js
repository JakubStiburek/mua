import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Center, Heading, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import articles from "../localization/articles";
import Article from "../components/Article";
import mapIndexed from "../utils/mapIndexed";

const Articles = () => {
  const {isLoading, error, data} = useQuery("gallery", () =>
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

  const renderArticles = mapIndexed((item, key) =>
    <Article
    title={item.title}
    topic={item.topic}
    content={item.content}
    createdAt={item.created_at}
    coverUrl={item.cover.url}
    media={item.media}
    key={key}
  />, data )


  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{articles.title}</Heading>
      {renderArticles}
    </DefaultLayout>
  )
};

export default Articles;
