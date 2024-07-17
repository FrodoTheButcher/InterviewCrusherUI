import React, { useState } from 'react'
import Info from './Components/Info'
import './QuizPage.css'
import Exercise from './Components/Exercise'
import EndOfQuiz from './Components/EndOfQuiz'
import AnswersQuiz from './Components/AnswersQuiz'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const QuizPage = ({ quizes}) => {
  const [step,setStep]=useState(1)
  const [quiz,setQuiz] = useState(null)
  const {contentId} = useParams()
  const [answerChoosed, setAnswerChoosed] = useState([])
  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    if (quizes) {
      let quizData = quizes.finished.find(video => video.id.toString() === contentId)
      if (!quizData)
    {
     quizData = quizes.unfinished.find(video => video.id.toString() === contentId)
    }
      setQuiz(quizData)
    }
  }, [quizes, contentId])


  return (
      <section className='QuizPage d-flex align-items-center justify-content-center' style={{ height:'100vh',position:'relative',flexDirection:'column',width: '100vw'}}>
      {step === 1 && <Info quiz={quiz} setStep={setStep}/> }
      {step === 2 && <Exercise  quiz={quiz}  setStep={setStep} />}
      {step === 3 && <AnswersQuiz setUserAnswers={setUserAnswers} answerChoosed={answerChoosed} quiz={quiz}  setAnswerChoosed={setAnswerChoosed} setStep={setStep}/>}
      {step === 4 && <EndOfQuiz  setUserAnswers={setUserAnswers} userAnswers={userAnswers} quiz={quiz} answerChoosed={answerChoosed} setStep={setStep} />}


    </section>
  )
}

export default QuizPage
