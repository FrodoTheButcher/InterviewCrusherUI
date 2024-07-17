import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './IntroductionPage.css'
import Screen3 from './Components/Screen3'
import TextIntroduction from './Components/TextIntroduction'
import Screen2 from './Components/Screen2'
import FloatingButtons from '../../ChattingSystem/Components/FloatingButtons'
import Chat from '../../ChattingSystem/Chatting/Chat'
const IntroductionPage = () => {

  return (
    <>
    <FloatingButtons/>
    <Chat/>
      <Container className='ContainerPage d-flex flex-column align-items-center justify-content-center' fluid style={{ width: '100vw', height: '100vh', flexDirection: 'column' }}>
        <TextIntroduction />
      </Container>
      <Screen2/>
      <Screen3/>
    </>
  
  )
}

export default IntroductionPage
