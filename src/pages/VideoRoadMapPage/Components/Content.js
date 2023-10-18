import React, { useContext, useState } from 'react'
import { Col, Dropdown, ListGroup, ListGroupItem, NavDropdown, Row } from 'react-bootstrap'
import {DropdownButton} from 'react-bootstrap'
import '../Course.css'
import { Link, useParams } from 'react-router-dom'
import CheckMark from '../../../components/CheckMark'
import Unchecked from '../../../components/Unchecked'
const Content = ({ courseContent,text, type, roadmap }) => {
  const { roadmapName, roadmapId } = useParams()
  return (
    
    <ListGroup>
      <h4 style={{color: 'black' }}>{text}</h4>
      <NavDropdown style={{}}  id="nav-dropdown-dark-example"
        title="Sections"
        menuVariant="white"> 
          <ListGroup>
          {courseContent?.map((course ,index)=>
                <ListGroup.Item variant={index%2===0 ? 'primary' : ''} >
              <Link to={`/${roadmapName}/${roadmapId}/1/${type}/${course?.id}/`}  style={{ textDecoration: 'none', color: 'black' }} >
                    <Col>
                      <Row><strong> Section {index}:{course.name}</strong></Row>
                      <Row><small> {course?.time}</small></Row>
                    </Col>
                    <Col>
                      <small>{course.description}</small>
                      <CheckMark/>
                  <Unchecked/>
                    </Col>
                  </Link>
                </ListGroup.Item>
              )}
        </ListGroup>

          </NavDropdown>
          
        
      </ListGroup>
  )
}

export default Content
