import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Submission.css'
const Tips = ({ tipNumber,description,name }) => {
  return (
    <div className='SubmissionHover'>
          <Accordion.Header>#{tipNumber} {name}</Accordion.Header>
          <Accordion.Body>
              {description}
          </Accordion.Body>
    </div>
    
  )
}

export default Tips
