import NextLink from 'next/link'
import Image from 'next/image'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
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
function LinkItem({href, path, children}){
  const active = path === href
  const inactiveColor = 'gray200'
  return (
    <NextLink href= {href}>
      <Link
        p={2} //padding value
        fontWeight="bold"
      >
        {children}
      </Link>
    </NextLink>
  )
}

function Navbar(props) {
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
      p={2}
      wrap="wrap"
      align="center"
      justifyContent="space-between"
      maxW="80ch"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" fontFamily="VarelaRound">
            <LinkItem href="/" path={path}>
              Stephen Choo
            </LinkItem>
          </Heading>
        </Flex>
        <Stack
        direction='row'
        display='flex'
        width='auto'
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        mt='0'
        >
          <LinkItem href="/wip" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/wip" path={path}>
            Contact
          </LinkItem>
        </Stack>
      </Container>
    </Box>

  )
}

export default Navbar
