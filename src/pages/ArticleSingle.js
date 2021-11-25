import DefaultLayout from "../components/Layout";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Center, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import Article from "../components/Article";

const ArticleSingle = () => {
  const {id} = useParams()
  const {isLoading, error, data} = useQuery(["article", id], () => fetch(
      `${URL.RENDER_URL}${ENDPOINT.ARTICLES}?id=${id}`
    ).then((res) => res.json())
  )

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
        <Text fontSize="sm" align="center">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  return (
    <DefaultLayout>
      <Article
        title={data[0].title}
        topic={data[0].topic}
        content={data[0].content}
        createdAt={data[0].created_at}
        coverUrl={data[0].cover.url}
        media={data[0].media}
      />
    </DefaultLayout>
  )
};

export default ArticleSingle;
