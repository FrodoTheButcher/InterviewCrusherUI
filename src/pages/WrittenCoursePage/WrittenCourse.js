import React, { useEffect } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import {  primaryBlue, primaryGray } from '../../Static/Colors'
import './WrittenCourse.css'
import { TypeAnimation } from 'react-type-animation';
import Contents from './Components/Contents';
import { Link, useNavigate, useParams } from 'react-router-dom';
import WhiteButton from '../../components/WhiteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWrittenCourse, updateAndRetreiveUserWrittenCourse } from '../../actions/writtenCourse';
import Loader from '../../components/Spinner';
import Message from '../../components/Message';
import ErrorPrinter from '../../actions/errorPrinter';

const WrittenCourse = () => {

  const {chapter,roadmap} = useParams()
  const navigate = useNavigate()
  const {loading,error,writtenCourses} = useSelector(state => state.getWrittenCoursesReducer)
  const {loading:loadingUpdatedCourse,error:errorUpdatedCourse,writtenCourse:updatedWrittenCourse} = useSelector(state => state.updateUserWrittenCourseReducer)
  const {loading:loadingUserCourse,error:errorUserCourse,writtenCourse:userWrittenCourse} = useSelector(state => state.getUserWrittenCourseReducerById)
  const dispatch = useDispatch()
  const handleRequest = ()=>{
      if(writtenCourses.firstTimeWatching)
      dispatch(updateAndRetreiveUserWrittenCourse(chapter))
     else
       dispatch(getUserWrittenCourse(roadmap))
  }

  useEffect(()=>{
    if(updatedWrittenCourse)
    {
      navigate(`/writtenCourseLecture/${roadmap}/${chapter}/${updatedWrittenCourse.id}/${updatedWrittenCourse?.page}/`)
    }
  },[updatedWrittenCourse])
  useEffect(()=>{
    if(userWrittenCourse && userWrittenCourse.userWrittenCourse)
    {
      navigate(`/writtenCourseLecture/${roadmap}/${chapter}/${userWrittenCourse.userWrittenCourse.id}/${userWrittenCourse.page}`)
    }
  },[userWrittenCourse])

  if(loadingUpdatedCourse || loadingUserCourse)
  {
    return (
      <Loader/>
    )
  }
  if(errorUpdatedCourse || errorUserCourse)
  {
    return (
      <Message>
        {ErrorPrinter(errorUpdatedCourse ? errorUpdatedCourse : errorUserCourse)}
      </Message>
    )
  }

  
  return (
<div className='WrittenCourse' style={{ height: 'calc(100vh - 10em)', width: '100vw' }}>
            <Row style={{width:'100%',height:'20%',position:'relative',alignItems:'center',justifyContent:'center',background:'rgb(237, 241, 246)',color:primaryGray}}>
              <div style={{width:'70%',height:'100%',position:'relative',padding:'1em'}}>
                  <Col>
                    <h3 style={{opacity:'0.9'}}>Interview<span style={{color:primaryBlue}}>Crusher</span></h3>
                    <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      'HandsOn Learning',
                      1000,
                      'HandsOn Studying',
                      1000,
                      'HandsOn Coding',
                      1000,
                      'HandsOn Having Fun...',
                      1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={1}
                  />
                    <p>
                    Don't just watch or read about someone else coding <br/>
                    — learn writting your own code,<br/>
                    with our interactive platform <br/>
                    start getting your desired job today! <br/>
                    </p>
                  </Col>
                  <Col>
                  </Col>
              </div>
            </Row>
        <div  style={{width:'100%',height:'80%',marginTop:'5em'}}>
        {loading || !writtenCourses ? 
        <Spinner/>
        :  
      
        <Button onClick={handleRequest} className='StartBtn' style={{ width: '13rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem',marginBottom:'1em', backgroundColor: "#1CABFC", borderRadius: "120px" }}><Link style={{textDecoration:'none',color:'white',fontWeight:'bolder',fontSize:'1.5em'}} >{writtenCourses.firstTimeWatching ? "Start" : "Continue"}</Link ></Button>
        } 
              <Contents/>
        </div>
    </div>
  )
}

export default WrittenCourse
