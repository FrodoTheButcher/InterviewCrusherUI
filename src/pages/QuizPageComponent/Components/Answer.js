import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Answer = ({answer}) => {
  return (
      <div className='CommentHover' style={{ width: '100%', display: 'flex', margin: '1em', border: '1px solid #dee2e6', padding: '15px', borderRadius: '30px', cursor: 'pointer' }}>
          <Row md={10} style={{padding:'1rem'}}  >
             <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}}>
                  {answer?.name}
             </Link>
          </Row >
      </div>

  )
}

export default Answer
