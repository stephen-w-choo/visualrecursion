import { AnimatePresence, motion } from 'framer-motion'
import {
  Container,
  } from '@chakra-ui/react'


const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

function Body({ children }) {
  return (
    <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
    >
      <Container // Chakra container, defaults to a maxWidth of 60ch
      display="flex"
      p={2}
      wrap="wrap"
      align="center"
      justifyContent="space-between"
      maxW="70ch"
      >
        {children}
      </Container>
    </motion.div>
  );
}

export default Body
