import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function ParameterForm(props) {
  const [channelName, setChannelName] = useState('');
  const [date, setDate] = useState('');

  const handleChannelNameChange = (e) => { setChannelName(e.target.value) };
  const handleDateChange = (e) => { setDate(e.target.value) };

  return (
    <FormControl isInvalid={isError}>
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
  );
}