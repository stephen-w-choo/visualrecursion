import Body from '../components/layout/body'
import GridItem from '../components/griditem'
import SectionHeader from '../components/sectionheader'
import MarkovTwitterIcon from '../images/projects/markovtwitter.png'
import VisualRecursionIcon from '../images/projects/visualrecursion.png'
import GoogleFoobarIcon from '../images/projects/googlefoobar.png'
import EYChallengeIcon from '../images/projects/eychallenge.png'
import ZoomAvoiderIcon from '../images/projects/zoomavoider.png'
import DFAIcon from '../images/projects/dentalfirstaid.png'
import TTTIcon from '../images/projects/tictactyrant.png'


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
        <SectionHeader fontSize="xl">
          Current Projects
        </SectionHeader>
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
          title="Twitter Caricatures"
          description="A web app that generates fake tweets using Markov chaining. My first foray into NLP, although the library is doing most of the heavy lifting for me."
          github="https://github.com/stephen-w-choo/markov-twitter"
          website="https://markovtwitter.com/"
          tags={["Python", "Flask", "React", "AWS"]}
          />
        </Flex>
        <SectionHeader fontSize="xl">
          Coding Challenges
        </SectionHeader>
        <Flex
        width="100%"
        flexWrap="wrap"
        justifyContent="center"
        >
          <GridItem
            image={GoogleFoobarIcon.src}
            title="Google Foobar"
            description="Google's invitational coding challenge, which I successfully completed. Still the most fun I've had while writing code."
            github="https://github.com/stephen-w-choo/google-foobar-solutions"
            website="https://foobar.withgoogle.com/"
            tags={["Python", "Data Structures", "Algorithms"]} />
          <GridItem
            image={EYChallengeIcon.src}
            title="EY Better Working World Challenge"
            description="A data science challenge - one that I was not particularly succcessful in."
            github="https://github.com/stephen-w-choo/2022-Better-Working-World-Data-Challenge"
            website="https://www.ey.com/en_au/careers/data-science-challenge"
            tags={["Python", "Jupyter Notebook", "Azure"]} />
        </Flex>
        <SectionHeader fontSize="xl">
          Other Projects
        </SectionHeader>
        <Flex
        width="100%"
        flexWrap="wrap"
        justifyContent="center"
        >
          <GridItem
            image={VisualRecursionIcon.src}
            title="Visual Recursion"
            description="You're looking at it: my portfolio and eventual fractal arts showcase."
            github="https://github.com/stephen-w-choo/visualrecursion"
            tags={["React", "Next", "ChakraJS", "framer-motion", "AWS"]} />
          <GridItem
            image={ZoomAvoiderIcon.src}
            title="Zoom Meeting Avoider"
            description="A joke script to avoid zoom meetings.
            Prompted by a comment from another bootcamp student that he
            wanted &apos;a script that logs me in automatically and
            displays a looped video on zoom&apos;. This did exactly that."
            github="https://github.com/stephen-w-choo/zoom-meeting-avoider"
            tags={["Python", "Selenium"]} />
          <GridItem
            image={DFAIcon.src}
            title="Dental First Aid"
            description="A website that teaches you how to deal with dental emergencies.
            An older project to practice plain HTML/CSS/Javascript"
            github="https://github.com/stephen-w-choo/dental-first-aid"
            website="https://stephen-w-choo.github.io/dental-first-aid/"
            tags={["Vanilla JS", "HTML/CSS"]} />
          <GridItem
            image={TTTIcon.src}
            title="Tic Tac Tyrant"
            description="Another old project - featuring you against an
            unbeatable tic tac toe AI. I had a lot of fun making the UI for this one. "
            github="https://github.com/stephen-w-choo/tic-tac-tyrant-ai"
            website="https://stephen-w-choo.github.io/tic-tac-tyrant-ai/"
            tags={["Vanilla JS", "HTML/CSS"]} />
        </Flex>
      </Flex>
    </Body>
  )
}
