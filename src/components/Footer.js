import styled from "styled-components";
import footer from "../localization/footer";
import {Flex, Text} from "@chakra-ui/react";
import Pointer from "./Pointer";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import EmailIcon from "./EmailIcon";
import PhoneIcon from "./PhoneIcon";
import ContactItem from "./ContactItem";

const Rect = styled.div`
  margin-bottom: 31.516px;
  background: ${({theme}) => theme.miaRed};
  height: 100px;
  width: 312px;
  border-radius: 0 0 25px 25px;
`

const Footer = () => {
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
            <ContactItem href="" icon={<FacebookIcon/>}/>
            <ContactItem href="" icon={<InstagramIcon/>}/>
            <ContactItem href="" icon={<EmailIcon/>}/>
            <ContactItem href="" icon={<PhoneIcon/>}/>
          </Flex>
          <Text fontSize="xs">{createdBy}</Text>
        </Flex>
    </Rect>
  )
};

export default Footer;
