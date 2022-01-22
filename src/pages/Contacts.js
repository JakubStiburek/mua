import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import ContactItem from "../components/ContactItem";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";
import EmailIcon from "../components/EmailIcon";
import PhoneIcon from "../components/PhoneIcon";
import {useQuery} from "react-query";
import {ENDPOINTS} from "../constants/urls";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import contacts from "../localization/contacts";
import {useContext} from "react";
import {ColorThemeContext} from "../App";
import PageLayout from "../components/PageLayout";
import DefaultLayout from "../components/DefaultLayout";
import {useMediaQuery} from "@mui/material";
import fetchPageData from "../utils/fetchPageData";

const Contacts = () => {
  const {miaWhite} = useContext(ColorThemeContext);
  const iconSize = useMediaQuery('(min-width: 768px)') ? [26, 30] : [16, 20]

  const {isLoading, error, data} = useQuery("contacts", () => fetchPageData(ENDPOINTS.CONTACTS));

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{contacts.title}</Heading>
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
        <Text fontSize="sm" align="center">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  console.log({data})

  return (
    <PageLayout>
      <Heading size="xl" fontWeight={100}>{contacts.title}</Heading>
        <Flex direction="column">
          <Text align="center" fontSize={["md", "md", "xl", "xl"]}>Solomija Stibůrková</Text>
          <Center>
            <Flex>
              <Text fontWeight="bold" fontSize={["md", "md", "xl", "xl"]}>{contacts.ico}</Text>
              <Box w="5px"/>
              <Text fontSize={["md", "md", "xl", "xl"]}>{contacts.icoNo}</Text>
            </Flex>
          </Center>
          <Box h="80px"/>
          <Flex direction="column" align="center" justify="space-evenly" h={["150px", "150px", "200px", "200px"]}>
            <ContactItem href={data[0].url} icon={<FacebookIcon width={iconSize[0]} height={iconSize[1]}/>}
                         label={data[0].label}/>
            <Box height={[5, 5, 10, 10]} />
            <ContactItem href={data[1].url} icon={<InstagramIcon width={iconSize[0]} height={iconSize[1]}/>} label={data[1].label}/>
            <Box height={[5, 5, 10, 10]} />
            <ContactItem href={data[2].url} icon={<EmailIcon width={iconSize[0]} height={iconSize[1]}/>} label={data[2].label}/>
            <Box height={[5, 5, 10, 10]} />
            <ContactItem href={data[3].url} icon={<PhoneIcon width={iconSize[0]} height={iconSize[1]}/>} label={data[3].label}/>
          </Flex>
          <Box h="80px"/>
        </Flex>
    </PageLayout>
  )
};

export default Contacts;
