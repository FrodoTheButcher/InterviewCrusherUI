import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

import {useAuth } from '../../../Context/LoginContext';
const LoginSignIn = () => {

    const {login}=useAuth();
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        login(e.target.elements.email.value,e.target.elements.password.value);
    }
  return (
    <>
        <div className='signIn-container'>
              <Form onSubmit={handleSubmit} style = {{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h2 className='signIn-title'>Login To Your Account</h2>
            <hr style = {{marginBottom:"5rem", marginTop:"2rem", width:'25rem'}}></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"1rem"}}>
                <Form.Control type="email" name="email" placeholder="Email" style={{backgroundColor:'#DDE6EE', color:'#8DA1B4', width:'25rem'}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"1rem"}}>
                <Form.Control type="password" name="password" placeholder="Password" style={{backgroundColor:'#DDE6EE', color:'#8DA1B4', width:'25rem'}}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='signIn-btn' style={{backgroundColor:'#477EB1', fontSize:'1.2rem', fontWeight:'600', borderColor:'#477EB1'}}> 
                Sign In
            </Button>
            </Form>
        </div>
    </>
  )
}

export default LoginSignIn