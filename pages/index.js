import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import profilePicture from '../images/cat_profile.jpg'
import pythonLogo from '../images/python-logo.svg'
import jsLogo from '../images/js-logo.svg'
import railsLogo from '../images/rails-logo.svg'
import rubyLogo from '../images/ruby-logo.svg'
import ghLogo from '../images/social/github.svg'
import lcLogo from '../images/social/leetcode.svg'
import linkedinLogo from '../images/social/linkedin.svg'
import arrowIcon from '../images/arrow-up.svg'
import Body from '../components/layout/body'

import {
  Image,
  Flex,
  Box,
  Container,
  Divider,
  Button,
  Collapse,
  Link,
  Text,
  Heading
  } from '@chakra-ui/react'

function HighlightText({children}) {
  return (
    <Text as="span" fontWeight="bold" bg='rgba(48, 105, 152, 0.2)'>
      {children}
    </Text>
  )
}
export default function Home() {
  const [ state, setState ] = React.useState({
    initialOpen: true,
    pythonOpen: false,
    javascriptOpen: false,
    rubyOpen: false,
    othersOpen: false,
  });

  const offState = {
    ...state,
    initialOpen: false,
    pythonOpen: false,
    javascriptOpen: false,
    rubyOpen: false,
    othersOpen: false,
  }

  function allOff(){
    setState(offState)
  }

  const toggleCollapse = (collapseBool) => {
      if (state[collapseBool] === true) {
        setState({
          ...offState,
          initialOpen: true
        })
      } else {
        setState({
          ...offState,
          [collapseBool]: true
        })
      }
    }


  return (
    <Body>
      <Flex justifyContent="center" alignItems="center" margin="0 auto" flexDirection="column" flex="1" p="4" minH="80vh" maxW="70ch">
        <Flex mt="200px" alignItems="center" justifyContent="center">
          <Box>
            <Heading size="lg" mr="40px" fontFamily="VarelaRound" fontWeight="700">
                Hi, I&apos;m Stephen
            </Heading>
          </Box>
          <Image src={ profilePicture.src} alt="profile picture" borderRadius='full' boxSize='120px'></Image>
        </Flex>
        <br></br>
        <Box
          p='10px'
          bg='rgba(240, 232, 205)'
          rounded='md'
          shadow='md'
          textAlign='left'
          >
          <Text fontSize="lg">
            I&apos;m an aspiring developer who enjoys  <Link
            href="http://www.playingwithchaos.net/"
            fontWeight="bold">making fractals</Link> and solving <Link
            href="https://leetcode.com/stephen-w-choo/"
            fontWeight="bold">
              algorithmic challenges.</Link>
          </Text>
          <br></br>
          <Text fontSize="lg">When I&apos;m not online, you can
              find me as a practicing dentist🦷 in Melbourne, Australia.
          </Text>
        </Box>
        <p className={styles.description}>
          I use <Link
            color='rgba(48, 105, 152)'
            fontWeight="bold"
            bg='rgba(48, 105, 152, 0.2)'
            rounded='md'
            shadow='md'
            padding='5px'
            onClick={() => toggleCollapse('pythonOpen')}
          >Python</Link>
          , <Link
          color='rgba(181, 164, 24)'
          fontWeight="bold"
          bg='rgba(181, 164, 24, 0.1)'
          rounded='md'
          shadow='md'
          padding='5px'
          onClick={() => toggleCollapse('javascriptOpen')}
          >Javascript</Link>, <Link
          color='rgba(169, 20, 1)'
          fontWeight="bold"
          bg='rgba(169, 20, 1, 0.1)'
          rounded='md'
          shadow='md'
          padding='5px'
          onClick={() => toggleCollapse('rubyOpen')}
          >Rails</Link>
          , and <Link
          color='rgba(0,139,139)'
          fontWeight="bold"
          bg='rgba(0,139,139, 0.1)'
          rounded='md'
          shadow='md'
          padding='5px'
          onClick={() => toggleCollapse('othersOpen')}
          >others</Link>.
        </p>
        <Collapse in={state.initialOpen} animateOpacity={true}>
        <Box mb="50px">
          <Image src={ arrowIcon.src} alt="arrow icon" boxSize='20px' display='inline'></Image> <Text as="span" fontWeight="600" fontSize="lg">Click to see more.</Text>
        </Box>
        </Collapse>
        <Collapse in={state.pythonOpen} animateOpacity={true} >
          <Box
            p='10px'
            mt='4'
            bg='rgba(48, 105, 152, 0.1)'
            // border='40px'
            // borderColor='#306998'
            rounded='md'
            shadow='md'
            textAlign='left'
          >
            <Flex justifyContent="center" mb="1rem">
              <Image src={ pythonLogo.src} alt="python icon" boxSize='40px' mr="10px"></Image>
              <Text fontSize="2xl" fontWeight="Bold">Python</Text>
            </Flex>
            <Text fontSize='lg'>Python is my main language for making <HighlightText>quick scripts</HighlightText>.</Text>
            <br></br>
            <Text fontSize='lg'>I&apos;ve also used it to make <HighlightText>web
              backends</HighlightText> using <Link fontWeight="bold"
              href="https://flask.palletsprojects.com/en/2.2.x/">Flask</Link> and <Link fontWeight="bold"
              href="https://www.djangoproject.com/">Django</Link>. </Text>
            <br></br>
            <Text fontSize='lg'>I&apos;m currently exploring <HighlightText>natural language
              processing</HighlightText> with Python using <Text
              as="span" fontWeight="bold">nltk</Text>, <Text
              as="span" fontWeight="bold">word2vec</Text> and <Text
              as="span" fontWeight="bold">TensorFlow</Text>. </Text>
          </Box>
        </Collapse>
        <Collapse in={state["javascriptOpen"]} animateOpacity>
        <Box
            p='10px'
            mt='4'
            bg='rgba(247,223,30, 0.1)'
            // border='40px'
            // borderColor='#306998'
            rounded='md'
            shadow='md'
            textAlign='left'
          >
            <Flex justifyContent="center" mb="1rem">
              <Image src={ jsLogo.src} alt="js icon" boxSize='40px' borderRadius="20%" mr="10px"></Image>
              <Text fontSize="2xl" fontWeight="Bold">Javascript</Text>
            </Flex>
            <Text fontSize='lg'>I use Javascript for <HighlightText>web frontends</HighlightText> and
            creating <HighlightText>user interfaces</HighlightText>.</Text>
            <br></br>
            <Text fontSize='lg'>
            I also use it to make <HighlightText>fractals</HighlightText> - like the one that
            you&apos;re seeing in the background right now! </Text>
            <br></br>
            <Text fontSize='lg'>Currently learning <Link fontWeight="bold"
              href="https://reactjs.org/">React</Link>/<Link fontWeight="bold"
              href="https://nextjs.org/">Next.js</Link>, which I&apos;ve started to incorporate into my personal projects.</Text>
          </Box>
        </Collapse>
        <Collapse in={state["rubyOpen"]} animateOpacity>
          <Box
              p='10px'
              mt='4'
              bg='rgba(169, 20, 1, 0.1)'
              // border='40px'
              // borderColor='#306998'
              rounded='md'
              shadow='md'
              textAlign='left'
            >
              <Flex justifyContent="center" mb="1rem">
                <Image src={ rubyLogo.src } alt="js icon" boxSize='40px' borderRadius="20%" mr="10px"></Image>
                <Text fontSize="2xl" fontWeight="Bold">Rails</Text>
              </Flex>
              <Text fontSize='lg'>I&apos;m currently learning the <HighlightText>Ruby on
              Rails</HighlightText> ecosystem (ActiveRecord, StimulusJS etc.) at a Web Development Bootcamp.</Text>
          </Box>
        </Collapse>
        <Collapse in={state["othersOpen"]} animateOpacity>
          <Box
            p='10px'
            mt='4'
            bg='rgba(0,139,139, 0.1)'
            // border='40px'
            // borderColor='#306998'
            rounded='md'
            shadow='md'
            textAlign='left'
          >
            <Flex justifyContent="center" mb="1.5rem">
              <Text as="u" fontSize="2xl" fontWeight="Bold">Other skills</Text>
            </Flex>
            <Text fontSize='lg'>I usually use <HighlightText>AWS</HighlightText> for deployment, and I&apos;m
            familiar with Amazon DynamoDB as well as the Amazon SDK for Python, Boto3.</Text>
            <br></br>
            <Text fontSize='lg'>I&apos;ve also learnt a bit of
            both <HighlightText>C</HighlightText> and <HighlightText>SQL</HighlightText> in the past, though
            I&apos;m far from proficient in either language.</Text>
          </Box>
        </Collapse>
        <br></br>
        <p className={styles.description} >
        </p>
        <Heading fontSize="lg">Find me on: </Heading>
        <Flex justifyContent="center">
          <Link href="https://leetcode.com/stephen-w-choo/">
            <Image src={ lcLogo.src} alt="leetcode icon" boxSize='40px' m="20px"></Image>
          </Link>
          <Link href="https://github.com/stephen-w-choo/">
            <Image src={ ghLogo.src} alt="github icon" boxSize='40px' m="20px"></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/stephen-choo-b130b3238/">
            <Image src={ linkedinLogo.src} alt="linkedin icon" boxSize='40px' m="20px"></Image>
          </Link>
        </Flex>
      </Flex>
    </Body>
  )
}
