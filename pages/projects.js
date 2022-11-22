import Body from '../components/layout/body'
import GridItem from '../components/griditem'
import MarkovTwitterIcon from '../images/projects/markovtwitter.png'
import VisualRecursionIcon from '../images/projects/visualrecursion.png'
import GoogleFoobarIcon from '../images/projects/googlefoobar.png'
import EYChallengeIcon from '../images/projects/eychallenge.png'

import {
  Box,
  Flex,
  Grid,
  Heading
      } from '@chakra-ui/react'

export default function Home() {
  return (
    <Body>
      <Flex
      flexDirection="column"
      mt="250px"
      alignItems="center"
      justifyContent="center"
      width="100%">
        <Heading fontSize="2xl" fontFamily="VarelaRound">Current Projects</Heading>
        <Flex
        width="100%"
        // gridTemplateColumns="repeat(auto-fill, 350px)"
        // justifyItems="center"
        // textAlign="center"
        flexWrap="wrap"
        justifyContent="center"
        >
          <GridItem
          image={MarkovTwitterIcon.src}
          href="/projects/markovtwitter"
          title="Twitter Caricatures"
          description="A web app that generates fake tweets using Markov chaining." />
          <GridItem
          image={VisualRecursionIcon.src}
          href="/projects/visualrecursion"
          title="Visual Recursion"
          description="You're looking at it: my portfolio and eventual fractal arts showcase. \n Made with React/Next" />
        </Flex>
        <Heading fontSize="2xl" fontFamily="VarelaRound">
          Coding Challenges
        </Heading>
        <Flex
        width="100%"
        // gridTemplateColumns="repeat(auto-fill, 350px)"
        // justifyItems="center"
        // textAlign="center"
        flexWrap="wrap"
        justifyContent="center"
        >
          <GridItem
            image={GoogleFoobarIcon.src}
            href="/projects/googlefoobar"
            title="Google Foobar"
            description="Google's invitational coding challenge, which I successfully completed. Still the most fun I've had while writing code." />
          <GridItem
            image={EYChallengeIcon.src}
            href="/projects/eychallenge"
            title="EY Better Working World Challenge"
            description="A data science challenge - one that I was not particularly succcessful in." />
        </Flex>
        <Heading fontSize="2xl" fontFamily="VarelaRound">
          Older Projects
        </Heading>
        {/* <Flex
        width="100%"
        // gridTemplateColumns="repeat(auto-fill, 350px)"
        // justifyItems="center"
        // textAlign="center"
        flexWrap="wrap"
        justifyContent="center"
        >
          <GridItem
          image={MarkovTwitterIcon.src}
          href="/projects/markovtwitter"
          title="Twitter Caricatures"
          description="A web app that generates fake tweets using Markov chaining." />
          <GridItem
          image={VisualRecursionIcon.src}
          href="/projects/visual recursion"
          title="Visual Recursion"
          description="You're looking at it: my portfolio and eventual fractal arts showcase." />
        </Flex> */}
      </Flex>
    </Body>
  )
}
