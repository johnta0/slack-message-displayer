import { ChakraProvider, Container } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container my={10} maxW={"container.lg"}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp
