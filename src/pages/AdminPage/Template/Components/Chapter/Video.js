import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
const Video = ({setChapterStep,setChapter}) => {
  const [videoArray,setVideoArray]=useState([{name:"",url:"",chapter_id:"",videoLength:"",description:""}])

    const handleSubmit=(e)=>{
        e.preventDefault()  
      setVideoArray((prev) =>
       [...prev, 
        {name:e.target.name.value,url:e.target.url.value,chapter_id:e.target.chapter_id.value,videoLength:e.target.videoLength.value,description:e.target.description.value}]);
    }
 
  return (
    <>
    <Form onSubmit={handleSubmit} style={{color:'white'}}>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name={"name"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>url</Form.Label>
                        <Form.Control type="file" name={"url"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>chapter_id</Form.Label>
                        <Form.Control type="number" name={"chapter_id"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>videoLength</Form.Label>
                        <Form.Control type="number" name={"videoLength"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name={"description"} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <Button onClick={()=>setChapter(prev=>({...prev,videos:videoArray}))}>
              HandleSubmitOfRoadmap
            </Button>
            <Button onClick={()=>setChapterStep(prev=>prev+1)}>
              Next
            </Button>
    </>
            
  )
}

export default Video
