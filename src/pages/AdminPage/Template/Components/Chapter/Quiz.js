import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
const Quiz = ({setChapter,setChapterStep}) => {

  const [quizArray,setQuizArray]=useState([{name:"",url:"",chapter_id:"",videoLength:"",description:"",answers:[]}])

    const handleSubmit=(e)=>{
        e.preventDefault()  
      setQuizArray((prev) =>
        [...prev, 
          {name:e.target.name.value,chapter_id:e.target.chapter_id.value,description:e.target.description.value,difficulty:e.target.difficulty.value,hint:e.target.hint.value,points:e.target.points.value,time:e.target.time.value,minusPointsToSkip:e.target.minusPointsToSkip.value,pointsEarned:e.target.pointsEarned.value,category:e.target.category.value,answers:answers}]);
    }

    const [answers,setAnswers]=useState([])
    
    const handleSubmitAnswer=(e)=>{
        e.preventDefault()  
      setAnswers((prev) =>
       [...prev, 
        {name:e.target.name.value,isCorrect:e.target.isCorrect.value,description:e.target.description.value,explanation:e.target.explanation.value}]);
    }

    useEffect(
        ()=>{
            console.log(answers)
        },[answers]
    )
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
                        <Form.Label>chapter_id</Form.Label>
                        <Form.Control type="number" name={"chapter_id"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name={"description"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>difficulty</Form.Label>
                        <Form.Control type="number" name={"difficulty"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>hint</Form.Label>
                        <Form.Control type="text" name={"hint"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>points</Form.Label>
                        <Form.Control type="number" name={"points"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>time</Form.Label>
                        <Form.Control type="number" name={"time"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>minusPointsToSkip</Form.Label>
                        <Form.Control type="number" name={"minusPointsToSkip"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>pointsEarned</Form.Label>
                        <Form.Control type="number" name={"pointsEarned"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>category</Form.Label>
                        <Form.Control type="text" name={"category"} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <Form onSubmit={handleSubmitAnswer}>
                <Row>Answers</Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name={"name"} />
                        <Form.Label>isCorrect</Form.Label>
                        <Form.Control type="number" name={"isCorrect"} />
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name={"description"} />
                        <Form.Label>explanation</Form.Label>
                        <Form.Control type="text" name={"explanation"} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit answer
                </Button>
            </Form>
            <Button onClick={()=>setChapter(prev=>({...prev,quizes:quizArray}))}>
              HandleSubmitOfRoadmap
            </Button>
            <Button onClick={()=>setChapterStep(prev=>prev+1)}>
              Next
            </Button>
    </>
            
  )
}

export default Quiz
