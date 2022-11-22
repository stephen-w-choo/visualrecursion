
import React from 'react'
import LinkItem from '../linkitem'
import { motion } from 'framer-motion'
import logo from '../../images/logos/gosper.png'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} height="40px">
        Menu
      </Button>
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
              <Text fontSize="3xl" m="30px">
                Home
              </Text>
            </LinkItem>
            <LinkItem href="/wip">
              <Text fontSize="3xl" m="30px">
                Portfolio
              </Text>
            </LinkItem>
            <LinkItem href="/wip">
              <Text fontSize="3xl" m="30px">
                About
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
      p="2"
      wrap="wrap"
      align="center"
      justifyContent="space-between"
      maxW="80ch"
      >

        {/* <LinkItem href="/" path={path} > */}
        <Image display="inline" src={ logo.src} alt="logo" borderRadius='full' boxSize='50px' m="0px" opacity="0.5"></Image>
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
        mt='0'
        >
          <LinkItem href="/" path={path} >
            Home
          </LinkItem>
          <LinkItem href="/wip" path={path} >
            Portfolio
          </LinkItem>
          <LinkItem href="/wip" path={path} >
            About
          </LinkItem>
        </Stack>) }

        {!matches && (
        <Flex
        justifyContent="flex-end"
        width="100%"
        >
          <NavDrawer />
        </Flex>) }

      </Container>
    </Box>

  )
}

export default Navbar
