import {map} from "ramda";
import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Box, Image} from "@chakra-ui/react";

const Gallery = () => {
  const {isLoading, error, data} = useQuery("gallery", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.GALLERY}`
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const renderedImages = map(image => {
    return (
      <Box padding="5px">
        <Image src={`${URL.RENDER_URL}${image.url}`} w={image.width} h={image.height} />
      </Box>
    )
  }, data.images)

  return (
    <DefaultLayout>
      {renderedImages}
    </DefaultLayout>
  )
};

export default Gallery;
