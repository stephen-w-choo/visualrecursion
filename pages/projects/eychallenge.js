import Head from 'next/head'
import Body from '../../components/layout/body'
import MarkovTwitterIcon from '../../images/projects/markovtwitter.png'
import VisualRecursionIcon from '../../images/projects/visualrecursion.png'
import GoogleFoobarIcon from '../../images/projects/googlefoobar.png'
import EYChallengeIcon from '../../images/projects/eychallenge.png'

import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text
      } from '@chakra-ui/react'

export default function Project() {
  return (
    <Body>
      <Box maxW="60ch" margin="0 auto">
        <Flex
          width="100%"
          // gridTemplateColumns="repeat(auto-fill, 350px)"
          // justifyItems="center"
          // textAlign="center"
          flexWrap="wrap"
          justifyContent="center"
          mt="250px"
          >
          <Image
          src={EYChallengeIcon.src}
          alt="EY Challenge"
          boxSize="150px"
          width="150px"
          borderRadius="20px" />
          <Box>
            <Heading fontSize="2xl" fontFamily="VarelaRound">
              EY Better Working World Challenge 2022
            </Heading>
            <Text>Links: Github</Text>
            <Text>I used: Python, Jupyter Notebook, Azure</Text>
          </Box>

        </Flex>
      </Box>
    </Body>
  )
}
