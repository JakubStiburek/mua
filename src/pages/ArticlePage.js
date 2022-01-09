import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {ENDPOINTS} from "../constants/urls";
import {Center, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import Article from "../components/Article";
import {useContext} from "react";
import {ColorThemeContext} from "../App";
import PageLayout from "../components/PageLayout";
import DefaultLayout from "../components/DefaultLayout";
import fetchArticle from "../utils/fetchArticle";

const ArticlePage = () => {
  const {miaWhite} = useContext(ColorThemeContext);
  const {id} = useParams()
  const {isLoading, error, data} = useQuery(["article", id], () => fetchArticle(ENDPOINTS.ARTICLE, id))

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
        <Text fontSize="sm" align="center">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  return (
    <PageLayout>
      <Article
        title={data.title}
        topic={data.topic}
        content={data.content}
        createdAt={data.created_at}
        coverUrl={data.cover.url}
        media={data.media}
      />
    </PageLayout>
  )
};

export default ArticlePage;
