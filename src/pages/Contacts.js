import DefaultLayout from "../components/Layout";
import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import ContactItem from "../components/ContactItem";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";
import EmailIcon from "../components/EmailIcon";
import PhoneIcon from "../components/PhoneIcon";
import {useQuery} from "react-query";
import {ENDPOINT, URL} from "../urls";
import Loader from "react-loader-spinner";
import common from "../localization/common";
import contacts from "../localization/contacts";

const Contacts = () => {
  const {isLoading, error, data} = useQuery("contacts", () =>
    fetch(
      `${URL.RENDER_URL}${ENDPOINT.CONTACTS}`
    ).then((res) => res.json())
  );

  if (isLoading) return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{contacts.title}</Heading>
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
        <Text fontSize="sm" align="center">{`${common.error} ${error.message}`}</Text>
      </Center>
    </DefaultLayout>
  )

  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>{contacts.title}</Heading>
        <Flex direction="column">
          <Text align="center">Solomija Stibůrková</Text>
          <Center>
            <Flex>
              <Text fontWeight="bold">{contacts.ico}</Text>
              <Box w="5px"/>
              <Text>{contacts.icoNo}</Text>
            </Flex>
          </Center>
          <Box h="80px"/>
          <Flex direction="column" align="center" justify="space-evenly" h="150px">
            <ContactItem href={data[0].url} icon={<FacebookIcon/>}
                         label={data[0].label}/>
            <Box height={5} />
            <ContactItem href={data[1].url} icon={<InstagramIcon/>} label={data[1].label}/>
            <Box height={5} />
            <ContactItem href={data[2].url} icon={<EmailIcon/>} label={data[2].label}/>
            <Box height={5} />
            <ContactItem href={data[3].url} icon={<PhoneIcon/>} label={data[3].label}/>
          </Flex>
          <Box h="80px"/>
        </Flex>
    </DefaultLayout>
  )
};

export default Contacts;
