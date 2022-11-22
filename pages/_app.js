import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/layout/navbar'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import {
  Flex,
  Heading
  } from '@chakra-ui/react'


function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }
  return (
    <div>
      <Head>
        <title>Stephen Choo - Homepage</title>
        <link rel="icon" href="../public/favicon.png" />
      </Head>
    <ChakraProvider>

      <div id="wrapper">
      <Flex width="100%" justifyContent="center">
        <motion.div
          initial= {{ opacity: 0 }}
          animate= {{ opacity: [0, 1, 1, 0],
            // transitionEnd: {display: "none"}
          }}
          exit= {{ opacity: 0 }}
          transition={{ delay: 0, duration: 2.5, type: 'easeInOut' }}
          style={{ position: 'absolute', top:"200px"}}
          >
          <motion.svg
            width="300"
            height="300"
            initial="hidden"
            animate="visible"
          >
          <motion.path
            d="M7.68 50.1 c2.94 1.32 5.52 1.98 7.68 1.98 c1.08 0 1.74 -0.06 2.04 -0.24 c1.38 -0.36 2.34 -1.14 2.94 -2.34 l0.06 -0.12 c0.3 -0.54 0.42 -1.2 0.42 -2.04 c0 -0.42 -0.12 -0.9 -0.36 -1.5 l-0.12 -0.24 c-0.78 -1.62 -2.52 -2.7 -5.7 -3.72 l-0.6 -0.18 l-0.18 -0.06 c-4.86 -1.44 -7.98 -3.72 -9.48 -6.9 c-0.6 -1.2 -0.9 -2.52 -0.9 -3.96 c0 -1.5 0.3 -2.94 0.9 -4.44 l0.12 -0.24 c1.38 -2.76 3.6 -4.56 6.54 -5.46 c2.1 -0.3 3.3 -0.48 3.6 -0.48 c4.08 0 8.82 1.68 14.16 4.98 l1.14 -1.86 c-5.82 -3.54 -10.86 -5.28 -15.24 -5.28 c-1.74 0 -3.18 0.18 -4.2 0.6 c-3.54 0.96 -6.18 3.12 -7.92 6.54 l-0.18 0.42 c-0.72 1.74 -1.08 3.48 -1.08 5.22 c0 1.86 0.36 3.48 1.08 4.92 c1.86 3.72 5.46 6.36 10.86 7.98 l0.72 0.24 c2.46 0.78 3.9 1.62 4.44 2.58 l0.06 0.12 c0.12 0.18 0.18 0.42 0.18 0.72 c0 0.54 -0.06 0.9 -0.24 1.2 c-0.42 0.96 -1.44 1.44 -3.06 1.44 c-2.58 0 -6.3 -1.32 -9.18 -3.18 l-0.9 -0.54 l-5.28 8.52 l0.9 0.54 c4.26 2.88 9.9 4.68 14.46 4.68 c1.5 0 2.88 -0.18 4.14 -0.54 c3.54 -1.02 6.18 -3.24 7.92 -6.6 l0.24 -0.42 c0.72 -1.86 1.08 -3.6 1.08 -5.22 c0 -1.44 -0.48 -3.24 -1.38 -5.46 c-1.62 -3.24 -5.04 -5.7 -10.38 -7.38 l-0.84 -0.24 c-1.68 -0.54 -2.82 -1.08 -3.36 -1.5 c-0.72 -0.6 -1.14 -1.02 -1.32 -1.26 l-0.12 -0.66 c0 -0.6 0.12 -1.14 0.42 -1.56 c0.48 -0.9 0.96 -1.14 2.88 -1.14 c2.58 0 6.3 1.32 9.18 3.18 l0.9 0.54 l3.24 -5.16 l-0.96 -0.54 c-3.66 -2.4 -8.64 -4.08 -12.3 -4.08 c-1.62 0 -2.64 0.12 -3.18 0.42 c-2.46 0.72 -4.32 2.28 -5.52 4.62 c-0.54 1.02 -0.78 2.22 -0.78 3.72 c0 1.14 0.24 2.22 0.72 3.24 c1.26 2.7 4.08 4.68 8.46 6 l0.78 0.24 l1.62 0.6 c0.9 0.36 1.86 0.84 2.94 1.44 c1.92 1.14 2.88 2.76 2.88 4.92 c0 1.2 -0.3 2.34 -0.84 3.36 c-1.26 2.22 -3.42 3.36 -6.42 3.36 c-2.04 0 -4.92 -0.78 -8.64 -2.28 l-1.02 1.74 l-0.06 0.12 c3.42 1.74 6.66 2.58 9.78 2.58 c1.74 0 3.36 -0.36 4.8 -1.08 c2.82 -1.38 4.56 -4.26 4.56 -7.86 c0 -5.7 -4.38 -7.38 -9 -9 l-0.78 -0.24 c-3.78 -1.14 -6.12 -2.7 -7.08 -4.8 c-0.36 -0.72 -0.54 -1.5 -0.54 -2.4 c0 -1.14 0.18 -2.04 0.6 -2.82 c0.96 -1.74 2.34 -2.88 4.14 -3.42 l2.4 -0.3 c3.18 0 6.66 1.08 10.44 3.18 l-0.96 1.5 c-3.9 -1.92 -7.02 -2.88 -9.3 -2.88 c-1.14 0 -1.8 0.06 -2.1 0.24 c-1.32 0.36 -2.28 1.14 -2.94 2.4 l-0.06 0.12 c-0.3 0.54 -0.42 1.26 -0.42 2.16 c0 0.66 0.12 1.14 0.3 1.44 c0.78 1.62 2.82 2.94 6.06 3.9 l0.78 0.24 l1.5 0.48 c0.18 0.06 1.14 0.48 2.88 1.32 c2.34 1.32 4.02 3 4.98 4.98 c0.6 1.2 0.9 2.52 0.9 3.96 c0 1.74 -0.3 3.24 -0.96 4.5 l-0.12 0.24 c-1.38 2.76 -3.6 4.56 -6.54 5.46 c-2.1 0.3 -3.3 0.48 -3.6 0.48 c-3.06 0 -7.02 -1.14 -10.68 -2.88 l-1.68 -0.9 l3 -4.86 z"
            style={{ scale: 4, originX: 0.5 }}
            fill="transparent"
            strokeWidth="1"
            stroke="rgba(0, 0, 0, 0.69)"
            strokeLinecap="round"
            initial={{ pathLength: 0, translateX:120, translateY:120 }}
            animate={{ pathLength: 1}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
            <Heading size="2xl" mr="40px" fontFamily="VarelaRound" fontWeight="700" textAlign="center">
                Loading
            </Heading>
          </motion.div>
      <Navbar path={router.asPath}/>
      </Flex>
        <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ delay: 2.5, duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
        >

          <AnimatePresence
              mode='wait'
              initial={true}
            >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </motion.div>
      </div>
    </ChakraProvider>
    </div>
  )
}

export default MyApp
