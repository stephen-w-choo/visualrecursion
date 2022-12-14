
import React from 'react'
import LinkItem from '../linkitem'
import { motion } from 'framer-motion'
import logo from '../../images/logos/websiteLogoHex.png'
import menuIcon from '../../images/menu-icon.svg'

import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Image,
  Link,
  Stack,
  Heading,
  useDisclosure,
  Flex,
  Text,
} from '@chakra-ui/react'
import styled from '@emotion/styled'


const NavbarStyle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`


function NavDrawer() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Image ref={btnRef} onClick={onToggle} display="inline" src={ menuIcon.src} alt="logo" boxSize="30px" mr="10px"></Image>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="rgb(252, 247, 233)">
          <Flex flexDirection="column" justifyContent="center" h="80%" alignItems="center">
            <LinkItem href="/" >
              <Text onClick={() => onClose()} fontSize="3xl" m="30px">
                About
              </Text>
            </LinkItem>
            <LinkItem href="/projects" onClick={onClose}>
              <Text onClick={() => onClose()} fontSize="3xl" m="30px">
                Portfolio
              </Text>
            </LinkItem>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function Navbar(props) {
  const [matches, setMatches] = React.useState( () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(min-width: 768px)").matches
    }
    return false
  }
  )

  React.useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  const { path } = props

  return (
    <Box
    position="fixed"
    as="nav"
    w="100%"
    bg = 'rgba(255, 255, 255, 0.5)' // white transparent background? I think?
    style={{backdropFilter:'blur(10px)'}} // blureffect
    zIndex={1}
    {...props}
    >
      <Container // Chakra container, defaults to a maxWidth of 60ch
      display="flex"
      p="1"
      wrap="wrap"
      align="center"
      justifyContent="space-between"
      maxW="100ch"
      >

        {/* <LinkItem href="/" path={path} > */}
      <Flex
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      >
        <Image display="inline" src={ logo.src} alt="logo" height="40px" width="50px" mr="10px"></Image>
        {matches &&
        <Heading
        fontFamily="Montserrat"
        fontSize="2xl"
        letterSpacing="tight"
        m="0px">
          Stephen Choo
        </Heading>
        }
          {/* <Flex justify="center" alignItems="center" m="0px"> */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{
                scale: [0, 1, 1],
                opacity: [0, 1, 0],
                borderRadius: ["20%", "20%"],
              }}
              transition={{
                duration: 2,
                times: [0, 1, 2],
              }}
              style = {{display: 'inline', margin:'0px'}}
            > */}

            {/* </motion.div> */}
          {/* </Flex> */}
        {/* </LinkItem> */}

        {matches && (<Stack
        direction='row'
        display='flex'
        width='auto'
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        >
          <LinkItem href="/" path={path} >
            About
          </LinkItem>
          <LinkItem href="/projects" path={path} >
            Portfolio
          </LinkItem>
        </Stack>) }

        {!matches && (

          <NavDrawer />
        ) }
        </Flex>
      </Container>
    </Box>

  )
}

export default Navbar
