import { ChakraProvider, Container } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container my={10}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp
