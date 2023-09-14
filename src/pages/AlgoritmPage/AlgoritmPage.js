import React, { useContext, useEffect } from 'react'
import { Container ,Col,Row} from 'react-bootstrap'
import Description from './Components/Description'
import Compiler from './Components/Compiler'
import CustomContext from '../../Context/ContextProvider'
import { DESCRIPTION, OVERVIEW, QUESTIONS, SOLUTIONS, SUBMISSIONS } from '../../Constants/AlgoritmPage'
import { useState } from 'react'
import NavbarAlgoPage from './Components/NavbarAlgoPage'
import Overview from './Components/Overview'
import Solutions from './Components/Solutions'
import Question from './Components/Question'
import Submissions from './Components/Submissions'
import { useParams } from 'react-router-dom'
import { HARD } from '../../Constants/DifficultyConstants'
const AlgoritmPage = () => {

  const [sectionActive, setSectionActive] = useState(1)
  const { projectViewScreen } = useContext(CustomContext)

 

  return (
      <div style={{position: 'relative', top: '5rem', width: '100vw', height: '100vh', background: 'rgb(240 240 240)'}} >
        <Row>
          <Col style={{borderLeft:'2rem white',overflowY:'scroll',height:'100vh'}}>
          <NavbarAlgoPage/>
          {projectViewScreen === DESCRIPTION  ? <Description difficulty={HARD} /> : "" }
          {projectViewScreen === OVERVIEW ? <Overview /> : ""}
          {projectViewScreen === SOLUTIONS ? <Solutions /> : ""}
          {projectViewScreen === QUESTIONS ? <Question /> : ""}
          {projectViewScreen === SUBMISSIONS ? <Submissions /> : ""}
          </Col>
            <Col>
                  <Compiler />
            </Col>
        </Row>
    </div>
  )
}

export default AlgoritmPage
