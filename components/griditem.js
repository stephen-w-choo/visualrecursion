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

export default function GridItem({children, image, title, description, github=null, website=null, tags, ...props}){
  return (
    <Box
    maxW="300px"
    // p='10px'
    // bg='rgba(240, 232, 205)'
    // rounded='md'
    // shadow='md'
    textAlign='left'
    m="30px"
    // borderStyle="solid"
    // borderWidth="1px"
    // borderColor="black"
    // borderRadius="20px"
    >
      <Flex flexDirection="column">
        <Image
        src={image}
        alt={title}
        fit="cover"
        height="150px"
        width="300px"
        borderRadius="20px 20px 0px 0px"
        mb="10px"></Image>
        <Box p="1">
          <Heading fontSize="lg" textAlign="left" mb="10px"> {title} </Heading>
          <Text textAlign="left"> {description} </Text>
          {children}
          <Text textAlign="left">
            <strong> Links: </strong>
            {github && <Link href={github}>Github</Link>} | {website && <Link href={website}>Website</Link>}
          </Text>
          <Text textAlign="left" fontFamily="monospace">
          {tags.map((tag) => {
            return( <Text key={tag.key} as="span"> <Text as="span" background="gray.200">{tag}</Text> </Text>  )
          }
          )}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
