import { Flex, Text } from "@chakra-ui/react";

// display_name, timestamp => Hour / minutes
const Messages = ({ messages }) => {
  return (
    <Flex
      w="100%"
      h="80%"
      overflowY="scroll"
      flexDirection="column"
      p="3">
        {messages.map(msg => (
          <Flex key={msg['client_msg_id']}>
            <Flex>
              <Text>{ msg['user_profile']['display_name'] }</Text>
              <Text>{ msg['ts'] }</Text>
            </Flex>
            <Flex
              bg="gray.100"
              color="black"
              my="1"
              p="3"
            >
              <Text>{ msg['text'] }</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
  );
}

export default Messages;
