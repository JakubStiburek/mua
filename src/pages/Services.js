import DefaultLayout from "../components/Layout"
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Center, Heading, Text} from "@chakra-ui/react";
import {StyledHeading} from "../components/StyledHeading";
import Loader from "react-loader-spinner";
import {StyledText} from "../components/StyledText";
import common from "../localization/common";
import {map} from "ramda";
import services from "../localization/services";
import Product from "../components/Product";

const Services = () => {
  const {isLoading, error, data} = useQuery("gallery", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.PRODUCTS}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>{services.title}</StyledHeading>
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

  const renderProducts = map(product => <Product product={product} />, data)

  return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>{services.title}</StyledHeading>
      </Heading>
      {renderProducts}
    </DefaultLayout>
  )
};

export default Services;
