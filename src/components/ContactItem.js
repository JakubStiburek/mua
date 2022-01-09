import {Box, Center, Flex, Link, Text} from "@chakra-ui/react";

const ContactItem = ({href, icon, label}) => (
  <Link href={href} isExternal>
    <Center>
      <Flex>
        <Box>
          {icon}
        </Box>
        {label &&
        <Box>
          <Box paddingLeft="5px" paddingTop={["2px", "2px", "3px", 0]}>
            <Text fontSize={["xs", "xs", "md", "xl"]}>{label}</Text>
          </Box>
        </Box>
        }
      </Flex>
    </Center>
  </Link>
)

export default ContactItem;
