import footer from "../localization/footer";
import {useMediaQuery} from "@mui/material";
import {Flex, Text} from "@chakra-ui/react";
import Pointer from "./Pointer";
import ContactItem from "./ContactItem";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import EmailIcon from "./EmailIcon";
import PhoneIcon from "./PhoneIcon";
import styled from "styled-components";

const Rect = styled.div`
  margin-bottom: 31.516px;
  background: ${({theme}) => theme.miaRed};
  height: 100px;
  width: 312px;
  border-radius: 0 0 25px 25px;
  @media (min-width: 481px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`

const FooterInner = ({facebook, instagram, email, phone}) => {
  const {backToTop, createdBy} = footer;
  const iconSize = useMediaQuery('(min-width: 768px)') ? [26, 30] : [16, 20]

  const handleClick = () => window.scrollTo({top: 0, behavior: "smooth"})

  return (
    <Rect>
      <Flex direction="column" align="center" justify="space-evenly" h="95px">
        <Pointer>
          <Text fontSize={["xs", "xs", "md", "xl"]} onClick={handleClick} as="u">{backToTop}</Text>
        </Pointer>
        <Flex direction="row" align="center" justify="space-between" w={["100px", "100px", "150px"]}>
          <ContactItem href={facebook} icon={<FacebookIcon width={iconSize[0]} height={iconSize[1]}/>}/>
          <ContactItem href={instagram} icon={<InstagramIcon width={iconSize[0]} height={iconSize[1]}/>}/>
          <ContactItem href={email} icon={<EmailIcon width={iconSize[0]} height={iconSize[1]}/>}/>
          <ContactItem href={phone} icon={<PhoneIcon width={iconSize[0]} height={iconSize[1]}/>}/>
        </Flex>
        <Text fontSize={["xs", "xs", "md", "xl"]}>{createdBy}</Text>
      </Flex>
    </Rect>
  )
}

export default FooterInner;
