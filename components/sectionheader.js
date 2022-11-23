import {
  Heading,
  Divider
} from '@chakra-ui/react'

export default function SectionHeader({children, ...props}){
  let fontSize = "md"
  if (props.fontSize) {
    fontSize = props.fontSize
  }

  return (
    <Heading
    fontFamily="MontserratBold"
    fontSize={fontSize}
    mb="10px"
    mt="10px">
      {children}
    <Divider borderColor="blackAlpha.500" />
    </Heading>
  )
}
