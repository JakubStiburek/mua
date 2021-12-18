import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import gallery from "../localization/gallery";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import mapIndexed from "../utils/mapIndexed";

const Gallery = () => {
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
  }, data.images)

  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{gallery.title}</Heading>
      {renderedImages}
    </DefaultLayout>
  )
};

export default Gallery;
