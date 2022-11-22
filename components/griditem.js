import NextLink from 'next/link'
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,

  Text
} from '@chakra-ui/react'
import Body from './layout/body'

export default function GridItem({children, image, title, description, href="/false", techstack, github=null, website=null, ...props}){
  return (
    <Box
    maxW="400px"
    p='10px'
    bg='rgba(240, 232, 205)'
    rounded='md'
    shadow='md'
    textAlign='left'
    m="10px">
      <NextLink href={href}>
        <Flex>
          <Image
          src={image}
          alt={title}
          boxSize="150px"
          borderRadius="20px"></Image>
          <Box ml="10px" p="1">
            <Heading fontSize="lg" textAlign="left" mb="10px"> {title} </Heading>
            <Text textAlign="left"> {description} </Text>
            {children}
          </Box>
        </Flex>
      </NextLink>
    </Box>
  )
}
