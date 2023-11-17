import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const TemplateSubmit = ({setRoadmap,setStep}) => {
    const handleSubmit=(e)=>{
        e.preventDefault()  
        console.log(e.target.title.value)
        setRoadmap((prev) => ({
            ...prev,
            title: e.target.title.value,
            description: e.target.description.value,
            avarageTimeToFinish: e.target.avarageTimeToFinish.value,
            video: e.target.video.value,
          }));
          setStep(e=>e+1 )
    }


  return (
            <Form onSubmit={handleSubmit} style={{color:'white'}}>
                
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Roadmap title </Form.Label>
            <Form.Control name='title' type="text"  />
        </Form.Group>
        <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
            <Form.Label>Roadmap description </Form.Label>
            <Form.Control name='description' type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Avarage time to finish </Form.Label>
            <Form.Control name='avarageTimeToFinish' type="number"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Video introduction </Form.Label>
            <Form.Control name='video' type="text"  />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
  )
}

export default TemplateSubmit
