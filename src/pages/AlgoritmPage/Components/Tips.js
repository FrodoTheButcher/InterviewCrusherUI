import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Submission.css'
const Tips = ({ name , index }) => {
  return (
    <div className='SubmissionHover'>
      {index} {name}
    </div>
    
  )
}

export default Tips
