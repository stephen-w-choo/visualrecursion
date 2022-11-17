import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { AnimatePresence } from 'framer-motion'

console.log(AnimatePresence)
function MyApp({ Component, pageProps }) {
  return (        <AnimatePresence
    exitBeforeEnter
    initial={true}
    onExitComplete={() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0 })
      }
    }}
  >
    <ChakraProvider>
      <div id="wrapper">
        <Navbar />

          <Component {...pageProps} />

      </div>
    </ChakraProvider>
    </AnimatePresence>
  )
}

export default MyApp
