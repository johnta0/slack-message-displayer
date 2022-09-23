import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function ParameterForm({ handleSendParams }) {
  const [channelName, setChannelName] = useState('');
  const [date, setDate] = useState('');

  const handleChannelNameChange = (e) => { setChannelName(e.target.value) };
  const handleDateChange = (e) => { setDate(e.target.value) };

  return (
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
          min="2013-08-01"
          onChange={handleDateChange}
        />
        <Button onClick={handleSendParams}>Go</Button>
      </FormControl>
  );
}