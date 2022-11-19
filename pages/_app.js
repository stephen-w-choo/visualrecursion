import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { AnimatePresence, motion } from 'framer-motion'




function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <div id="wrapper">
      <Navbar path={router.asPath}/>
        <AnimatePresence
            mode='wait'
            initial={true}
          >

          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </ChakraProvider>
  )
}

export default MyApp
