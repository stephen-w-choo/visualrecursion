import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div id="wrapper">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp
