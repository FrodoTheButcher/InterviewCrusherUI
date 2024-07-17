import React, { useEffect } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap';
import { primaryBlue, secondaryGray } from '../../../Static/Colors';
import { ListItem } from '@mui/material';
import "./index.css"
import WhiteButton from '../../../components/WhiteButton';
const QuizAnswers = ({quizAnswers,quizData}) => {
    useEffect(()=>{
        console.log(quizAnswers)
    },[quizAnswers])
  return (
    <Card style={{ background: 'white', width: '30%', height: '80%', borderRadius: '10px' }} className='d-flex align-items-center justify-content-center'>
    <Container style={{ width: '100%', height: '10%' }} className='d-flex flex-column align-items-center justify-content-center'>
        <Card.Title style={{ padding: '1em', fontSize: '1em', fontWeight: 'bolder', display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: 'center' }}>

            <p style={{ color: secondaryGray, margin: '0' }}>{quizData?.quiz_name}<small style={{ color: primaryBlue }}>Quiz</small></p>
        </Card.Title>
    </Container>

  
    <Container style={{ width: '90%' }} className='d-flex flex-column align-items-center justify-content-center'>
        <ListGroup style={{ padding: '1.5em' }}>
            <strong>{quizData?.quiz_description}</strong>
        </ListGroup>
        <div fluid className='d-flex align-items-center' style={{ flexDirection: 'column', overflowY: 'scroll', justifyContent: 'space-between', height: '20em',width:'100%' }}>
            <ListGroup style={{border:'1px solid lightgray'}}>
               {quizAnswers?.quiz_answers?.good_answers?.map(e=>
                 <ListItem className='OnHoverListItem' style={{display:'flex',flexDirection:'column',alignItems:'baseline',border:'1px solid lightgreen'}} >
                   <strong style={{color:'lightgreen'}}>Correct!</strong>
                   <strong style={{color:primaryBlue}}>{e.name}</strong>
                   <br/>
                   <p style={{color:secondaryGray}}>{e.explanation}</p>
                 </ListItem>
                )}
                  {quizAnswers.quiz_answers.bad_answers?.map(e=>
                 <ListItem style={{display:'flex',flexDirection:'column',alignItems:'baseline',border:'1px solid lightred'}} className='OnHoverListItem'>
                    <strong style={{color:'lightred'}}>Bad answer!</strong>
                    <strong style={{color:primaryBlue}}>{e.name}</strong>
                   <br/>
                   <p style={{color:secondaryGray}}>{e.explanation}</p>
                 </ListItem>
                )}
                   {quizAnswers.quiz_answers.missed_good_answers?.map(e=>
                 <ListItem style={{display:'flex',flexDirection:'column',alignItems:'baseline',border:'1px solid lightblue'}} className='OnHoverListItem'>
                   <strong style={{color:'lightblue'}}>Missed good answer!</strong>
                   <strong style={{color:primaryBlue}}>{e.name}</strong>
                   <br/>
                   <p style={{color:secondaryGray}}>{e.explanation}</p>
                 </ListItem>
                )}
                   {quizAnswers.quiz_answers.other_answers?.map(e=>
                 <ListItem style={{display:'flex',flexDirection:'column',alignItems:'baseline',border:'1px solid lightblack'}} className='OnHoverListItem'>
                   <strong style={{color:'gray'}}>Other answers</strong>
                   <strong style={{color:primaryBlue}}>{e.name}</strong>
                   <br/>
                   <p style={{color:secondaryGray}}>{e.explanation}</p>
                 </ListItem>
                )}
            </ListGroup>
           
        </div>
        
    </Container>
</Card>
  )
}

export default QuizAnswers
