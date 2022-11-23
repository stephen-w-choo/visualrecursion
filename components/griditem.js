import NextLink from 'next/link'
import {
  Box,
  Button,
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
    maxW="350px"
    // p='10px'
    // bg='rgba(240, 232, 205)'
    // rounded='md'
    // shadow='md'
    textAlign='left'
    m="10px 30px 30px 30px"
    // borderStyle="solid"
    // borderWidth="1px"
    // borderColor="black"
    // borderRadius="20px"
    >
      <Flex flexDirection="column" alignItems="center">
        <Image
        src={image}
        alt={title}
        fit="cover"
        height="150px"
        width="350px"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="gray"
        borderRadius="20px 20px 0px 0px"
        mb="10px"></Image>
        <Box p="1">
          <Heading fontSize="lg" textAlign="left" mb="10px"> {title} </Heading>

          <Text textAlign="left" mb="10px">
            {description}
          </Text>
          {children}

          <Text textAlign="left" fontFamily="monospace" mb="10px">
          {tags.map((tag) => {
            return( <Text key={tag.key} as="span"> <Text as="span" background="gray.200" fontSize="md">{tag}</Text> </Text>  )
          }
          )}
          </Text>

          <Text textAlign="left">
            <strong> Links: </strong>
            {github && <Button colorScheme="gray" mr = "20px"><Link href={github}>Github</Link></Button>}
            {website && (<Button>
              <Link href={website}> Website</Link>
            </Button>)}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
