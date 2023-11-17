import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../QuizPage.css'

const Answer = ({ answer, setUserAnswers }) => {
  const [focused,setFocused] = useState(false)
  const handleFocus = () => {
    if(focused)
    {
      setUserAnswers(prev => prev.filter(prev => prev !== answer.id))
      setFocused(false)
    }
    else
    {
      setUserAnswers(prev => [...prev, answer.id])
      setFocused(true)
    }
   
  }
  return (
    <Button className='focus-link CommentHover' onClick={handleFocus} style={{ opacity:focused ? 0.5 : 1, width: '100%', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', display: 'flex', margin: '1em', border: '1px solid #dee2e6', padding: '15px', borderRadius: '30px', cursor: 'pointer' ,color:'white'}}>
          <Row className='row-link' md={10} style={{padding:'1rem'}}  >
        <Link  className='link-link'  style={{textDecoration:'none',fontWeight:'600'}}>
                  {answer?.name}
             </Link>
             
          </Row >
      </Button>

  )
}

export default Answer
