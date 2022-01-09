import {useQuery} from "react-query";
import {ENDPOINTS} from "../constants/urls";
import FooterInner from "./FooterInner";
import fetchPageData from "../utils/fetchPageData";

const Footer = () => {
  const {isLoading, error, data} = useQuery("footer", () => fetchPageData(ENDPOINTS.CONTACTS));

  if (isLoading) return (
    <FooterInner facebook="" instagram="" email="" phone="" />
  )

  if (error) return (
    <FooterInner facebook="" instagram="" email="" phone="" />
  )

  return (
    <FooterInner facebook={data[0].url} instagram={data[1].url} email={data[2].url} phone={data[3].url} />
  )
};

export default Footer;
