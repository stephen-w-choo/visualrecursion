import {
  Text
} from '@chakra-ui/react'


export default function HighlightText({children}) {
  return (
    <Text as="span" fontWeight="bold" bg='rgba(48, 105, 152, 0.2)'>
      {children}
    </Text>
  )
}
