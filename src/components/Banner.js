import {useContext, useEffect, useState} from "react";
import banner from "../localization/banner";
import {Grid, GridItem, Text} from "@chakra-ui/react";
import {ColorThemeContext} from "../App";

const Banner = () => {
  const {miaYellow} = useContext(ColorThemeContext);
  const [version, setVersion] = useState(0);
  const { makeUp, items } = banner;

  useEffect(() => {
    const interval = setInterval(() => {
      setVersion(version === items.length - 1 ? 0 : version + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [version, items.length]);

  return (
    <Grid templateColumns="1fr 1fr" gap={2}>
      <GridItem justifySelf="end">
        <Text fontSize="3xl" color={miaYellow}>{items[version]}</Text>
      </GridItem>
      <Text fontSize="3xl">{ makeUp }</Text>
    </Grid>
  )
};

export default Banner;
