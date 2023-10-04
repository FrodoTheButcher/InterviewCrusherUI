import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import { useNavbar } from '../../../Context/ContextProvider'
import { DESCRIPTION, QUESTIONS, SOLUTIONS, SUBMISSIONS } from '../../../Constants/AlgoritmPage'
import { OVERVIEW } from '../../../Constants/AlgoritmPage'
const NavbarAlgoPage = ({setProjectViewScreen}) => {
    const [sectionActive, setSectionActive] = useState(1)

  return (
      <Row style={{ borderBottom: '1px solid #000a200d', paddingLeft: '1rem', paddingTop: '1rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} className='algoheader' >
          <Col onClick={() => {setSectionActive(1); setProjectViewScreen(DESCRIPTION)}}> <h7 className={`${sectionActive == 1 ? "setActive" : "notActive"}`} style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Description</h7></Col>
          <Col onClick={() => { setSectionActive(2); setProjectViewScreen(OVERVIEW) }}> <h7 className={`${sectionActive === 2 ? "setActive" : "notActive"}`} style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Overview</h7></Col>
          <Col onClick={() => { setSectionActive(3); setProjectViewScreen(SOLUTIONS) }}> <h7 className={`${sectionActive === 3 ? "setActive" : "notActive"}`} style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Solutions</h7></Col>
          <Col  onClick={() => { setSectionActive(4); setProjectViewScreen(QUESTIONS) }}> <h7 className={`${sectionActive === 4 ? "setActive" : "notActive"}`} style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Questions (11k)</h7></Col>
          <Col  onClick={() => { setSectionActive(5); setProjectViewScreen(SUBMISSIONS) }}><h7 className={`${sectionActive === 5 ? "setActive" : "notActive"}`} style={{ fontWeight: 'bolder', cursor: 'pointer' }}>Submissions</h7></Col>
      </Row>
  )
}

export default NavbarAlgoPage
