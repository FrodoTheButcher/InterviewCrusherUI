import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Info from './Components/Info'
import './QuizPage.css'
import Exercise from './Components/Exercise'
import EndOfQuiz from './Components/EndOfQuiz'
import AnswersQuiz from './Components/AnswersQuiz'
const QuizPage = () => {
  const [step,setStep]=useState(1)
  const [failed, setFailed] = useState(false)
  return (
      <section className='QuizPage d-flex align-items-center justify-content-center' style={{ height:'100vh',position:'relative',flexDirection:'column',width: '100vw'}}>
      {step == 1 && <Info  setStep={setStep}/> }
      {step == 2 && <Exercise  setStep={setStep} />}
      {step == 3 && <AnswersQuiz setFailed={setFailed}  setStep={setStep}/>}
      {step == 4 && <EndOfQuiz failed={failed} setStep={setStep} />}


    </section>
  )
}

export default QuizPage
