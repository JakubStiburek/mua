import {Box, Flex, Link, Spacer, Text} from "@chakra-ui/react";
import {StyledText} from "./StyledText";

const ContactItem = ({href, icon, label}) => {
  return (
    <Link href={href} isExternal>
      <Flex>
        <Box>
          {icon}
        </Box>
        <Spacer/>
        <Box>
          <Text fontSize="sm">
            <StyledText>{label}</StyledText>
          </Text>
        </Box>
      </Flex>
    </Link>
  )
};

export default ContactItem;
