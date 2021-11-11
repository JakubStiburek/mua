import {Box, Center, Flex, Link, Text} from "@chakra-ui/react";
import {StyledText} from "./StyledText";

const ContactItem = ({href, icon, label}) => {
  return (
    <Link href={href} isExternal>
      <Center>
        <Flex>
          <Box>
            {icon}
          </Box>
          <Box>
            <Text fontSize="sm">
              <StyledText>{label}</StyledText>
            </Text>
          </Box>
        </Flex>
      </Center>
    </Link>
  )
};

export default ContactItem;
