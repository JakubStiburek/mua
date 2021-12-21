import DefaultLayout from "../components/DefaultLayout";
import {Box, Grid, Image} from "@chakra-ui/react";
import home_img from '../media/home_img.jpg';
import Banner from "../components/Banner";

const Home = () => {

  return (
    <DefaultLayout>
      <Grid templateRows="1fr auto">
        <Banner/>
        <Box w="100%" h="5px" bg="white"/>
        <Image src={home_img} padding="0"/>
      </Grid>
    </DefaultLayout>
  )
};

export default Home;
