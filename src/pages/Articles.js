import DefaultLayout from "../components/Layout";
import {StyledText} from "../components/StyledText";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Center, Heading, Text} from "@chakra-ui/react";
import {StyledHeading} from "../components/StyledHeading";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import {map} from "ramda";
import articles from "../localization/articles";
import Article from "../components/Article";

const Articles = () => {
  const {isLoading, error, data} = useQuery("gallery", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.ARTICLES}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>{articles.title}</StyledHeading>
      </Heading>
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

  console.log(data)

  const getMediaUrls = (media) => map((item) => item.url, media);

  // const renderArticles = map((item) => <Article title={item.title} topic={item.topic} content={item.content} createdAt={item.created_at} coverUrl={item.cover.url} media={getMediaUrls(item.media)} />)


  return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>{articles.title}</StyledHeading>
      </Heading>
      <Article title={data[0].title} topic={data[0].topic} content={data[0].content} createdAt={data[0].created_at} coverUrl={data[0].cover.url} media={getMediaUrls(data[0].media)} />
      {/*{renderArticles}*/}
    </DefaultLayout>
  )
};

export default Articles;
