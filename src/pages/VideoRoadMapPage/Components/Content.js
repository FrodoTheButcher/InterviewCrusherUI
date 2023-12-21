import React, { useContext, useEffect, useState } from 'react'
import { Col, Dropdown, ListGroup, ListGroupItem, NavDropdown, Row } from 'react-bootstrap'
import {DropdownButton} from 'react-bootstrap'
import '../Course.css'
import { Link, useParams } from 'react-router-dom'
import CheckMark from '../../../components/CheckMark'
import LockIcon from '@mui/icons-material/Lock';
import ReusablePopup from '../../../components/ReusablePopup'
import { useDispatch, useSelector } from 'react-redux'
import { getPointsYouLoseSkippingContent } from '../../../actions/roadmapGetAllAction'
import SchoolIcon from '@mui/icons-material/School';
const Content = ({ courseContent,text ,isMainCourseContent , type, setUserAcceptsToSkipContentData}) => {

  const { roadmapName ,roadmapId ,chapterId } = useParams()
  const dispatch = useDispatch()
  const handleInvalidPopup = (exerciseToSkip)=>{
    dispatch(getPointsYouLoseSkippingContent(roadmapId,type,exerciseToSkip))
    setUserAcceptsToSkipContentData({
      "roadmapId":roadmapId,
      "contentType":type,
      "exerciseToSkipId":exerciseToSkip,
    })
  }

 
  return (
    
    <ListGroup>
      <h4 style={{color: 'black' }}>{text}</h4>
      <NavDropdown style={{}}  id="nav-dropdown-dark-example"
        title="Sections"
        menuVariant="white"> 
          <ListGroup>
          {courseContent?.finished?.map((course ,index)=>
                <ListGroup.Item variant={'primary'} >
              <Link to={`/${roadmapName}/${roadmapId}/${chapterId}/${type}/${course?.id}/`}  style={{ textDecoration: 'none', color: 'black' }} >
                    <Col>
                      <Row><strong> Section {index}:{course.name}</strong></Row>
                      <Row><small> {course?.time}</small></Row>
                    </Col>
                    <Col>
                      <small>{course.description}</small>
                      <CheckMark/>
                    </Col>
                  </Link>
                </ListGroup.Item>
              )}

              {
                isMainCourseContent && courseContent?.unfinished?.length>0 &&
                <ListGroup.Item variant="primary" >
                <Link style={{ textDecoration: 'none', color: 'black' }} >
                <Col>
                  <Row><strong> Section {0}:{courseContent.unfinished[0]?.name}</strong></Row>
                  <Row><small> {courseContent.unfinished[0]?.time}</small></Row>
                </Col>
                <Col>
                  <small>{courseContent?.unfinished[0]?.description}</small>
                  <SchoolIcon />
                </Col>
              </Link>
            </ListGroup.Item>
              }
          {courseContent?.unfinished?.map((course ,index)=>
          {

            if(index===0 && isMainCourseContent)  
              return (<></>
              )
            else
              return (
              <ListGroup.Item variant='secondary' >
              <Link onClick={()=>handleInvalidPopup(course?.id)} style={{ textDecoration: 'none', color: 'black' }} >
              <Col>
                <Row><strong> Section {index}:{course.name}</strong></Row>
                <Row><small> {course?.time}</small></Row>
              </Col>
              <Col>
                <small>{course.description}</small>
                <LockIcon />
              </Col>
            </Link>
          </ListGroup.Item>
              )
              
          }
         
              )}
        </ListGroup>

          </NavDropdown>
          
      </ListGroup>
  )
}

export default Content
