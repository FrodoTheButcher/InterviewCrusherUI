import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail } from '../../../actions/userAction';
import WhiteButton from '../../../components/WhiteButton';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import Loader from '../../../components/Spinner';

const Solutions = () => {
    const [data,setData]=useState({
        title:"",
        body:""
    })
    const [error,setError]=useState("")
    const {data:dataEmail,error:errorEmail,loading} = useSelector(state=>state.sendEmailReducer)
    const dispatch = useDispatch()
    const handle_email = () =>{
        if(data.title == "" || data.body == "")
        {
            setError("Title and description should be provided")
        }
        else
        dispatch(sendEmail(data))
    }

  return (
    <Container fluid style={{width:'100%',height:'100vh'}}>

            {
                error && 
                <CustomizedSnackbars message={error}  isOpen={true} severity={"info"}   />
            }
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
                  <Form.Label >Title</Form.Label>
                  <Form.Control onChange={(e)=>setData(prev=>({...prev,title:e.target.value}))} type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control onChange={(e)=>setData(prev=>({...prev,body:e.target.value}))} as="textarea" rows={3} />
              </Form.Group>
              <WhiteButton color={'black'} small={true} onClick={handle_email} text={"submit"} />
          </Form>
    </Container>
  )
}

export default Solutions
