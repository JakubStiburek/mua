import {useQuery} from "react-query";
import {ENDPOINTS} from "../constants/urls";
import {Box, Center, Container, Flex, Heading, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import services from "../localization/services";
import Service from "../components/Service";
import mapIndexed from "../utils/mapIndexed";
import {useContext} from "react";
import {ColorThemeContext} from "../App";
import PageLayout from "../components/PageLayout";
import DefaultLayout from "../components/DefaultLayout";
import fetchPageData from "../utils/fetchPageData";

const Services = () => {
  const {miaWhite} = useContext(ColorThemeContext);

  const {isLoading, error, data} = useQuery("services", () => fetchPageData(ENDPOINTS.PRODUCTS));

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{services.title}</Heading>
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

  const renderProducts = mapIndexed((product, key) => <Service product={product} key={key} />, data)

  return (
    <PageLayout>
      <Container centerContent minH="420px">
        <Heading size="xl" fontWeight={100}>{services.title}</Heading>
        <Box h="20px"/>
        <Flex direction="column" align="center" justify="space-evenly" minH="200px">
          {renderProducts}
        </Flex>
      </Container>
    </PageLayout>
  )
};

export default Services;
