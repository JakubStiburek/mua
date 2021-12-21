import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import gallery from "../localization/gallery";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import mapIndexed from "../utils/mapIndexed";
import {useContext} from "react";
import {ColorThemeContext} from "../App";
import {reverse} from "ramda";
import PageLayout from "../components/PageLayout";
import DefaultLayout from "../components/DefaultLayout";

const Gallery = () => {
  const {miaWhite} = useContext(ColorThemeContext);

  const {isLoading, error, data} = useQuery("gallery", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.GALLERY}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{gallery.title}</Heading>
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

  const renderedImages = mapIndexed((image, key) => {
    return (
      <Box padding="5px" key={key}>
        <Image src={`${URL.RENDER_URL}${image.url}`} w={270}/>
      </Box>
    )
  }, reverse(data.images))

  return (
    <PageLayout>
      <Heading size="xl" fontWeight={100}>{gallery.title}</Heading>
      {renderedImages}
    </PageLayout>
  )
};

export default Gallery;
