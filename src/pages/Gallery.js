import {map} from "ramda";
import DefaultLayout from "../components/Layout";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Box, Center, Heading, Image, Text} from "@chakra-ui/react";
import {StyledHeading} from "../components/StyledHeading";
import gallery from "../localization/gallery";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import {StyledText} from "../components/StyledText";

const Gallery = () => {
  const {isLoading, error, data} = useQuery("gallery", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.GALLERY}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
        <Heading size="xl">
          <StyledHeading>{gallery.title}</StyledHeading>
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

  const renderedImages = map(image => {
    return (
      <Box padding="5px">
        <Image src={`${URL.RENDER_URL}${image.url}`} w={image.width} h={image.height} />
      </Box>
    )
  }, data.images)

  return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>{gallery.title}</StyledHeading>
      </Heading>
      {renderedImages}
    </DefaultLayout>
  )
};

export default Gallery;
