import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

const Solutions = () => {
  return (
    <Container fluid style={{width:'100%',height:'100vh'}}>
          <Container fluid className='d-flex align-items-center justify-content-center'>
              <Toast className='p-2 mt-5'>
                  <Toast.Header>
                      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                      <strong className="me-auto">Attention!</strong>
                      <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello , if you get stuck, encounter an error or a bug , contact us!</Toast.Body>
              </Toast>
          </Container>
         
          <Form className='mt-5 p-5' >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Question and the exercise tag</Form.Label>
                  <Form.Control as="textarea" rows={3} />
              </Form.Group>
          </Form>
    </Container>
  )
}

export default Solutions
