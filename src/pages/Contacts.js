import DefaultLayout from "../components/Layout";
import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import ContactItem from "../components/ContactItem";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";
import EmailIcon from "../components/EmailIcon";
import PhoneIcon from "../components/PhoneIcon";

const Contacts = () => {
  return (
    <DefaultLayout>
      <Heading size="xl" fontWeight={100}>Kontakty</Heading>
        <Flex direction="column">
          <Text align="center">Solomija Stibůrková</Text>
          <Center>
            <Flex>
              <Text fontWeight="bold">IČO:</Text>
              <Text>1122334455</Text>
            </Flex>
          </Center>
          <Box height={10} />
          <ContactItem href="https://www.facebook.com/Solomia.m.Melnuk" icon={<FacebookIcon/>}
                       label="Vizážistka Solomija Stibůrková"/>
          <Box height={5} />
          <ContactItem href="https://www.instagram.com/vizazistka_solomija_stiburkova/" icon={<InstagramIcon/>}
                       label="vizazistka_solomija_stiburkova"/>
          <Box height={5} />
          <ContactItem href="mailto:solomia.melnyk.1@gmail.com" icon={<EmailIcon/>} label="solomia.melnyk.1@gmail.com"/>
          <Box height={5} />
          <ContactItem href="tel:+420792777387" icon={<PhoneIcon/>} label="+420 792 777 387"/>
        </Flex>
      <Box height={10} />
    </DefaultLayout>
  )
};

export default Contacts;
