import styled from "styled-components";
import footer from "../localization/footer";
import {Flex, Text} from "@chakra-ui/react";
import Pointer from "./Pointer";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import EmailIcon from "./EmailIcon";
import PhoneIcon from "./PhoneIcon";
import ContactItem from "./ContactItem";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";

const Rect = styled.div`
  margin-bottom: 31.516px;
  background: ${({theme}) => theme.miaRed};
  height: 100px;
  width: 312px;
  border-radius: 0 0 25px 25px;
`

const InnerFooter = ({facebook, instagram, email, phone}) => {
  const {backToTop, createdBy} = footer;

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <Rect>
      <Flex direction="column" align="center" justify="space-evenly" h="95px">
        <Pointer>
          <Text onClick={handleClick} as="u">{backToTop}</Text>
        </Pointer>
        <Flex direction="row" align="center" justify="space-between" w="100px">
          <ContactItem href={facebook} icon={<FacebookIcon/>}/>
          <ContactItem href={instagram} icon={<InstagramIcon/>}/>
          <ContactItem href={email} icon={<EmailIcon/>}/>
          <ContactItem href={phone} icon={<PhoneIcon/>}/>
        </Flex>
        <Text fontSize="xs">{createdBy}</Text>
      </Flex>
    </Rect>
  )
}

const Footer = () => {
  const {isLoading, error, data} = useQuery("footer", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.CONTACTS}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <InnerFooter facebook="" instagram="" email="" phone="" />
  )

  if (error) return (
    <InnerFooter facebook="" instagram="" email="" phone="" />
  )

  return (
    <InnerFooter facebook={data[0].url} instagram={data[1].url} email={data[2].url} phone={data[3].url} />
  )
};

export default Footer;
