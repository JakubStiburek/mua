import DefaultLayout from "./DefaultLayout";
import {Box} from "@chakra-ui/react";

const PageLayout = (props) => {
  return (
    <DefaultLayout>
      <Box h="20px"/>
      {props.children}
      <Box h="20px"/>
    </DefaultLayout>
  )
};

export default PageLayout;
