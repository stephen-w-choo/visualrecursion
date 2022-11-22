import NextLink from 'next/link'
import {
  Box,
  Heading,
  Link,
  Text
} from '@chakra-ui/react'
import Body from 'layout/body'

export default function GridItem({children, ...props, image, title, description, href}){
  return (
    <Body>
      <NextLink href={href}>
        <Image src={image} alt={title}></Image>
        <Heading> {title} </Heading>
        <Text> {description} </Text>
        {children}
      </NextLink>
    </Body>
  )
}
