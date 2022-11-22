import NextLink from 'next/link'
import {
  Link,
} from '@chakra-ui/react'

export default function LinkItem({href, path, children}){
  return (
    <NextLink href= {href} path = {path} scroll={false} m="0px">
      <Link
        p = "0px"
        mt="0px"
        mb="0px"
        mr="20px"
        fontWeight="semibold"
        letterSpacing="tight"
        fontFamily="Montserrat"
        scroll={false}
        fontSize="lg"
      >
        {children}
      </Link>
    </NextLink>
  )
}
