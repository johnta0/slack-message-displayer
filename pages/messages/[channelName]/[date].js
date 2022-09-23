import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getStaticProps = async ({ params }) => {
  const { channelName, date } = params;
  const data = await 
  return {
    props: {
      data
    }
  };
}

const Messages = ({ data }) => {  
  // const router = useRouter();
  // const { channelName, date } = router.query;

  // const { data, error } = useSWR(
  //   `/api/staticdata?channel_name=${channelName}&date=${date}`,
  //   fetcher,
  // );
  // if (error) return <>Failed to load</>
  // if (!data) return <>Loading...</>

  return (
    <Messages messages={data}/>
  );
}

export default Messages;
