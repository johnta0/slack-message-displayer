//useSWR allows the use of SWR inside function components
import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import useSWR from 'swr';
import Messages from '../components/Messages';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/staticdata?channel_name=johnmemo&date=2019-04-10', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      <Messages messages={data}/> 
    </div>
  );
}
