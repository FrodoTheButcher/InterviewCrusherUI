import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Submission.css'
const Tips = ({ name , index }) => {
  return (
    <div className='SubmissionHover'>
      <Accordion.Header>#{index} {name}</Accordion.Header>
    </div>
    
  )
}

export default Tips
