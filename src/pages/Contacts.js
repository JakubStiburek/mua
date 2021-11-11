import DefaultLayout from "../components/Layout";
import {Box, Center, Flex, Heading} from "@chakra-ui/react";
import {StyledHeading, StyledHeading2} from "../components/StyledHeading";
import ContactItem from "../components/ContactItem";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";
import {StyledText} from "../components/StyledText";
import EmailIcon from "../components/EmailIcon";
import PhoneIcon from "../components/PhoneIcon";

const Contacts = () => {
  return (
    <DefaultLayout>
      <Heading size="xl">
        <StyledHeading>Kontakty</StyledHeading>
      </Heading>
      <Box height={10} />
      <Flex direction="column">
        <StyledText>Solomija Stibůrková</StyledText>
        <Center>
          <Flex>
            <StyledHeading2>IČO:</StyledHeading2>
            <StyledText>1122334455</StyledText>
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
