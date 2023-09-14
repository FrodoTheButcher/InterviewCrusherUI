import React from 'react'
import { Row } from 'react-bootstrap'
import { ReactComponent as Biff } from '../../../svg/WhiteBiff.svg'
import { primaryBlue } from '../../../Static/Colors'

const ExerciseAnswer = ({ exerciseNum, answer, setAnswer }) => {


  return (

      <Row onClick={() => setAnswer(exerciseNum)} className='d-flex align-items-center justify-content-center' style={{ cursor:'pointer',width: '90%', textAlign: 'center', borderRadius: '50px', height: '8em', position: 'relative', border: '3px solid rgba(241, 241, 241, 0.9)' }}>
          <div className='biffcontainer' style={{ borderRadius: '200px', background: primaryBlue, width: '3em', height: '3em' }} >
              {
                answer == exerciseNum ? 
                      <Biff />
                    :
                    ""
              }
          </div>
          <h5>Lorem ipsum dllor set amet, consecturet adispcing elit</h5>
      </Row>
  )
}

export default ExerciseAnswer
