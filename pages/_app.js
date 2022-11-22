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
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
          <motion.path
            d="M534 1835 c-15 -23 -15 -27 0 -50 16 -24 20 -25 125 -25 l109 0 30
            -55 30 -54 -87 -3 -86 -3 -81 -152 c-45 -84 -79 -155 -76 -158 3 -3 128 -5
            277 -5 206 0 275 3 283 13 5 6 33 56 62 110 l52 97 82 0 82 0 22 -42 c11 -24
            51 -98 87 -165 l66 -123 -55 0 c-63 0 -50 -14 -153 179 l-50 93 -82 -153 c-44
            -84 -81 -160 -81 -167 0 -8 24 -58 53 -113 l52 -99 -41 -78 -41 -77 -171 -3
            -171 -2 29 52 29 53 140 5 140 5 -82 153 -82 152 -145 0 -146 0 -54 -105 -55
            -105 -58 0 -58 0 41 73 c22 41 40 80 40 88 0 15 -160 323 -165 317 -13 -14
            -275 -518 -275 -528 0 -7 30 -68 66 -136 l65 -124 114 0 115 0 25 -50 c14 -27
            25 -51 25 -53 0 -3 -37 -8 -83 -12 -77 -6 -85 -9 -99 -33 -8 -15 -45 -84 -82
            -155 l-68 -127 284 0 284 0 55 103 54 102 87 3 87 3 26 -50 c14 -28 25 -53 25
            -56 0 -3 -38 -5 -84 -5 l-84 0 -81 -151 c-45 -83 -81 -153 -81 -155 0 -2 127
            -4 283 -4 l282 0 69 133 69 132 -56 105 -56 105 81 152 c44 84 84 153 88 153
            4 0 18 -20 31 -46 l24 -45 -67 -129 c-38 -71 -68 -131 -68 -134 0 -3 74 -6
            165 -6 l165 0 20 33 c38 61 120 225 120 240 0 7 -9 22 -20 32 -34 31 -63 8
            -120 -99 l-51 -94 -52 -4 c-29 -2 -54 -3 -56 -1 -2 1 15 38 38 82 l41 80 -82
            155 c-46 86 -85 156 -88 156 -3 0 -68 -118 -144 -262 l-140 -262 57 -106 56
            -106 -42 -82 -42 -82 -167 0 c-93 0 -168 2 -168 5 0 3 11 28 25 55 l25 50 140
            0 c77 0 140 3 140 6 0 8 -150 287 -161 298 -5 6 -72 10 -149 11 l-141 1 -57
            -108 -57 -108 -167 0 c-93 0 -168 2 -168 5 0 3 12 27 28 55 l27 50 138 0 c84
            0 137 4 137 10 0 6 -36 76 -79 158 l-80 147 -115 3 -116 3 -40 80 -41 80 81
            155 c45 85 85 152 88 150 4 -2 18 -24 31 -49 l24 -44 -67 -125 c-36 -69 -66
            -128 -66 -132 0 -3 75 -6 168 -6 l167 0 55 105 55 105 85 0 86 0 27 -55 26
            -54 -86 -3 -86 -3 -78 -145 c-43 -80 -79 -148 -79 -153 0 -4 127 -6 282 -5
            l283 3 68 128 68 127 -57 106 -57 107 24 44 c13 25 27 47 31 49 4 2 24 -28 45
            -68 l38 -73 168 -3 c135 -2 168 0 165 11 -2 7 -63 126 -137 265 l-135 252
            -142 0 -143 0 -56 -104 -55 -103 -148 -7 c-81 -4 -157 -4 -169 1 l-22 8 29 53
            30 52 135 0 c74 0 135 3 135 8 0 4 -36 72 -79 152 l-78 145 -141 3 -141 3 -17
            -26z"
            style={{ scale: 0.08, originX: "100px", originY: "100px" }}
            fill="transparent"
            strokeWidth="12"
            stroke="rgba(0, 0, 0, 0.69)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
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
