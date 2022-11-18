import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div id="wrapper">
        <Navbar />
        {/* <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        > */}
          <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </div>
    </ChakraProvider>
  )
}

export default MyApp
