import { Box, Button, Flex, FormControl, FormLabel, Input, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import useSWR from 'swr';
import Messages from "../../components/Messages";
import ParameterForm from "../../components/ParameterForm";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const [messages, setMessages] = useState([]);
  
  const [channelName, setChannelName] = useState('');
  const [date, setDate] = useState('');

  const [url, setUrl] = useState('/messages');

  const handleSubmit = (event) => {
    setUrl(`/messages/${channelName}/${date}`);
  };

  return (
   <>
    <FormControl>
      <FormLabel>Channel Name</FormLabel>
      <Input
        placeholder="johnmemo"
        type={'text'}
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
      />
      <FormLabel>Date</FormLabel>
      <Input
        type={"date"}
        value={date}
        min="2013-08-01"
        onChange={(e) => setDate(e.target.value)}
      />
      <Button onClick={handleSubmit}>Go</Button>
    </FormControl>
    <Link href={url}>url</Link>
   </>
  );
}
