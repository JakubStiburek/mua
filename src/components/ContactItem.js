import {Box, Center, Flex, Link, Text} from "@chakra-ui/react";

const ContactItem = ({href, icon, label}) => {
  return (
    <Link href={href} isExternal>
      <Center>
        <Flex>
          <Box>
            {icon}
          </Box>
          {label &&
          <Box>
            <Box paddingLeft="5px">
              <Text fontSize="sm">{label}</Text>
            </Box>
          </Box>
          }
        </Flex>
      </Center>
    </Link>
  )
};

export default ContactItem;
