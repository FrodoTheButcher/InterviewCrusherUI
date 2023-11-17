import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
const Algorithm = ({setChapter,setChapterStep}) => {

    const [algorithmArray,setAlgorithmArray]=useState([{name:"",description:"",difficulty:"",category:"",hint:"",points:"",testCases:[],examples:[]}])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setAlgorithmArray((prev) =>
        [...prev,
            {name:e.target.name.value,description:e.target.description.value,difficulty:e.target.difficulty.value,category:e.target.category.value,hint:e.target.hint.value,points:e.target.points.value,testCases:testCases,examples:examples}]);

    }
        const [testCases,setTestCases]=useState([])

        const handleTestCases = (e) => {
            e.preventDefault()
            setTestCases((prev) =>
            [...prev,
                {input_data:e.target.input_data.value,expected_output:e.target.expected_output.value,points:e.target.points.value,tip:e.target.tip.value}]);
        }
    

    const [examples,setExamples]=useState([])
    const handleExamplesSubmit=(e)=>{
        e.preventDefault()
        setExamples((prev) =>
        [...prev,
            {explanation:e.target.explanation.value,input:e.target.input.value,output:e.target.output.value}]);
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
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name={"description"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>difficulty</Form.Label>
                        <Form.Control type="text" name={"difficulty"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>category</Form.Label>
                        <Form.Control type="text" name={"category"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>hint</Form.Label>
                        <Form.Control type="text" name={"hint"} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                        <Form.Label>points</Form.Label>
                        <Form.Control type="number" name={"points"} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <Form onSubmit={handleTestCases}>
                <Row>testcases</Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>input_data</Form.Label>
                        <Form.Control type="text" name={"input_data"} />
                        <Form.Label>expected_output</Form.Label>
                        <Form.Control type="text" name={"expected_output"} />
                        <Form.Label>points</Form.Label>
                        <Form.Control type="number" name={"points"} />
                        <Form.Label>tip</Form.Label>
                        <Form.Control type="text" name={"tip"} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit testcases
                </Button>
            </Form>
            <Form onSubmit={handleExamplesSubmit}>
                <Row>examples</Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>explanation</Form.Label>
                        <Form.Control type="text" name={"explanation"} />
                        <Form.Label>input</Form.Label>
                        <Form.Control type="text" name={"input"} />
                        <Form.Label>output</Form.Label>
                        <Form.Control type="text" name={"output"} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit examples
                </Button>
            </Form>
            <Button onClick={()=>setChapter(prev=>({...prev,algorithms:algorithmArray}))}>
              HandleSubmitOfRoadmap
            </Button>
            <Button onClick={()=>setChapterStep(prev=>prev+1)}>
              Next
            </Button>
    </>
            
  )
}

export default Algorithm
