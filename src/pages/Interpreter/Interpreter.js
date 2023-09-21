import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Interpreter() {
  const [text, setText] = useState('');
  const [lines, setLines] = useState([]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    const textLines = newText.split('\n');
    setLines(textLines);
  };

  return (
    <Container style={{width:'100%',height:'100%'}}>
      <Form style={{ width: '100%', height: '100%',margin:'0' }}>
        <Form.Group controlId="textareaControl">
          <Form.Control
            as="textarea"
            rows={25}
            value={text}
            onChange={handleChange}
          />
           <div>
        <h4>Lines:</h4>
           <Row style={{width:'100%'}}>
              <Col>
                {lines.length}
              </Col>
              <Col>
                <Button style={{ background:'rgb(28, 171, 252)',margin:'0'}} variant="secondary">Submit</Button>
              </Col>
            </Row>

          </div>
       
        </Form.Group>
        <Container className='mt-5'>
          <Row>
            <p style={{ color: 'black' }}>The Code editor is still in progress , but will get future updated soon..</p>
          </Row>
        </Container>
      </Form>
     
    </Container>
  );
}

export default Interpreter;
