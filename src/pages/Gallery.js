import Image from "../components/Image";
import pictures from "../constants/picturesMobile";
import {map, reverse} from "ramda";
import DefaultLayout from "../components/Layout";

const _template = () => {
  return (
    <DefaultLayout>
      {reverse(map((picture, key) => <Image src={picture} key={key}/>, pictures))}
    </DefaultLayout>
  )
};

export default _template;
