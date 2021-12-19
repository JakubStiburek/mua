import DefaultLayout from "../components/Layout";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Center, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import Article from "../components/Article";
import {useContext} from "react";
import {ColorThemeContext} from "../App";

const ArticleSingle = () => {
  const {miaWhite} = useContext(ColorThemeContext);
  const {id} = useParams()
  const {isLoading, error, data} = useQuery(["article", id], () => fetch(
      `${URL.RENDER_URL}${ENDPOINT.ARTICLE}${id}`
    ).then((res) => res.json())
  )

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

  console.log(data)
  return (
    <DefaultLayout>
      <Article
        title={data.title}
        topic={data.topic}
        content={data.content}
        createdAt={data.created_at}
        coverUrl={data.cover.url}
        media={data.media}
      />
    </DefaultLayout>
  )
};

export default ArticleSingle;
