import React from 'react'
import { Container } from 'react-bootstrap'
import LoadingBar from "../../../components/LoadingBar"
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
const LoadingScreen = () => {
  return (
    <Container fluid>
        <LoadingBar/>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "We are calculating your answers...",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We are calculating your mistakes...',
        1000,
        "Oh it's bad...kidding",
        1000,
        'Jokes on you..or not',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </Container>
  )
}

export default LoadingScreen
