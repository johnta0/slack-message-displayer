import { Box, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import useSWR from 'swr';
import Messages from "../../components/Messages";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  // Form data
  const [channelName, setChannelName] = useState('');
  const [date, setDate] = useState('');

  const handleChannelNameChange = (e) => { setChannelName(e.target.value) };
  const handleDateChange = (e) => { setDate(e.target.value) };

  // Message data
  const [filterdMessage, setFilteredMessage] = useState([]);

  const { messages, error } = useSWR(
    `/api/staticdata?channel_name=${channelName}&date=${date}`,
    fetcher
  );

  if (error) <Text>Error loading data</Text>
  let messageJSX;
  if (messages) messageJSX = <Messages messages={messages} />;
  else messageJSX = <>Loading...</>

  return (
    <>
      <FormControl>
        <FormLabel>Channel Name</FormLabel>
        <Input
          placeholder="johnmemo"
          type={'text'}
          value={channelName}
          onChange={handleChannelNameChange}
        />
        <FormLabel>Date</FormLabel>
        <Input
          type={"date"}
          value={date}
          onChange={handleDateChange}
        />
      </FormControl>
      { messageJSX }
    </>
  );
}
