import DefaultLayout from "../components/Layout"
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import {Center, Heading, Text} from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import services from "../localization/services";
import Product from "../components/Product";
import mapIndexed from "../utils/mapIndexed";

const Services = () => {
  const {isLoading, error, data} = useQuery("services", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.PRODUCTS}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{services.title}</Heading>
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

  const renderProducts = mapIndexed((product, key) => <Product product={product} key={key} />, data)

  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{services.title}</Heading>
      {renderProducts}
    </DefaultLayout>
  )
};

export default Services;
