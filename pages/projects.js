import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Body from '../components/layout/body'
import GridItem from '../components/griditem'

import {
  Box,
  Flex,
  Grid

      } from '@chakra-ui/react'

export default function Home() {
  return (
    <Body>
      <Flex>
        Current Projects
        <Grid>
          <GridItem
          title="Twitter Caricatures"
          description="A web app that generates fake tweets using Markov chaining" />
        </Grid>
        Coding Challenges
        <Grid>
        </Grid>
        Older Projects
        <Grid>
        </Grid>
      </Flex>
    </Body>
  )
}
