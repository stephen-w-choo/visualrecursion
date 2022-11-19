import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import profilePicture from '../images/cat_profile.jpg'
import pythonLogo from '../images/python-logo.svg'
import arrowIcon from '../images/arrow-up.svg'

import {
  Image,
  Flex,
  Box,
  Container,
  Link,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Heading
  } from '@chakra-ui/react'


export default function wip() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Stephen Choo - Homepage</title>
      </Head>

      <Container // Chakra container, defaults to a maxWidth of 60ch
      display="flex"
      p={2}
      wrap="wrap"
      flexDir="column"
      alignItems="center"
      maxW="70ch"
      minH="80ch"
      >

      <Heading mt="300px">I&apos;m still working on a proper gallery/portfolio page, please check back soon!
        It should be up by 22/11/22 at the latest. </Heading>

      <Text fontSize="20px" mt="50px">
        In the meantime, here is a very rough list of some of the things I&apos;ve made. Feel free to click on the links and have a look:
      </Text>
      <UnorderedList fontSize="20px">
        <ListItem mt="10px"> <Link href="https://markov-twitter.com" fontWeight="bold"> Twitter Caricatures - fake tweet generator </Link></ListItem>
        <Text> My most recent project. A website that lets you
          generate plausible tweets for a given Twitter account using Markov chaining.</Text>
        <Text>
          Made using Python/Flask, React, deployed on AWS.
        </Text>
        <ListItem mt="10px"> Visual Recursion - a fractal themed portfolio </ListItem>
        <Text> You&apos;re looking at it! This was meant to be a gallery with interactive
          fractals - hence the name. I&apos;ve repurposed it into a fractal themed portfolio page for now,
          but I&apos;d still like to add the interactive fractals in at some point.</Text>
        <Text>
          Made using React/Next.JS, deployed on AWS
        </Text>
        <ListItem mt="10px" fontWeight="bold">
          <Link href="https://github.com/stephen-w-choo/zoom-meeting-avoider">
            Zoom Meeting Avoider
          </Link>
        </ListItem>
          <Text> A joke script to avoid zoom meetings.
            It was prompted by a comment from another bootcamp student that he
            was going to &apos;write a script that logs me in automatically and
            displays a looped video on zoom&apos;. </Text>
          <Text> Made with: Python, Selenium </Text>
          <Text> Links:
          <Link href="https://github.com/stephen-w-choo/zoom-meeting-avoider" fontWeight="bold">Github</Link>
          </Text>
        <ListItem mt="10px" fontWeight="bold">
          <Link href="https://stephen-w-choo.github.io/dental-first-aid/">
            Dental First Aid
          </Link>
        </ListItem>
          <Text> A website that teaches you how to deal with dental emergencies. An older project to practice plain HTML/CSS/Javascript</Text>
          <Text> Made with: Pico.CSS, vanilla JS, webpack </Text>
          <Text> Links: <Link href="https://stephen-w-choo.github.io/dental-first-aid/" fontWeight="bold">Website</Link>,
          <Link href="https://github.com/stephen-w-choo/dental-first-aid" fontWeight="bold">Github</Link>
          </Text>
        <ListItem mt="10px" fontWeight="bold">
          <Link href="https://stephen-w-choo.github.io/tic-tac-tyrant-ai/">
            Tic Tac Tyrant
          </Link>
        </ListItem>
          <Text> Another old project - featuring you against an unbeatable tic tac toe AI. I had a lot of fun making the UI for this one. </Text>
          <Text> Made with: vanilla JS</Text>
          <Text> Links: <Link href="https://stephen-w-choo.github.io/tic-tac-tyrant-ai/" fontWeight="bold">Website</Link>,
          <Link href="https://github.com/stephen-w-choo/tic-tac-tyrant-ai" fontWeight="bold">Github</Link>
          </Text>
      </UnorderedList>

      </Container>
    </div>
  )
}
