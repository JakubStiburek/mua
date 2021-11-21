import {Box, Center, Flex, Link, Text} from "@chakra-ui/react";

const ContactItem = ({href, icon, label}) => {
  return (
    <Link href={href} isExternal>
      <Center>
        <Flex>
          <Box>
            {icon}
          </Box>
          <Box width="5px"/>
          <Box>
            <Text fontSize="sm">{label}</Text>
          </Box>
        </Flex>
      </Center>
    </Link>
  )
};

export default ContactItem;
