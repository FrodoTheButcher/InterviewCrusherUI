import React, { useState } from 'react'
import Info from './Components/Info'
import './QuizPage.css'
import Exercise from './Components/Exercise'
import EndOfQuiz from './Components/EndOfQuiz'
import AnswersQuiz from './Components/AnswersQuiz'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const QuizPage = ({ quizes }) => {
  const [step,setStep]=useState(1)
  const [quiz,setQuiz] = useState(null)
  const {contentId} = useParams()
  const [answerChoosed, setAnswerChoosed] = useState("")

  useEffect(() => {
    if (quizes) {
      const quizData = quizes.find(video => video.id.toString() === contentId)
      setQuiz(quizData)
    }
  }, [quizes, contentId, answerChoosed])


  return (
      <section className='QuizPage d-flex align-items-center justify-content-center' style={{ height:'100vh',position:'relative',flexDirection:'column',width: '100vw'}}>
      {step === 1 && <Info setStep={setStep}/> }
      {step === 2 && <Exercise  quiz={quiz}  setStep={setStep} />}
      {step === 3 && <AnswersQuiz answerChoosed={answerChoosed} quiz={quiz}  setAnswerChoosed={setAnswerChoosed} setStep={setStep}/>}
      {step === 4 && <EndOfQuiz quiz={quiz} answerChoosed={answerChoosed} setStep={setStep} />}


    </section>
  )
}

export default QuizPage
