import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUp.css'

const SignUpUserData = (pk,setPk) => {
    const [value, setValue] = useState({
        "email":"",
        "password":"",
        "password2":"",
    });

    const handleIncrease = (e)=>{
        e.preventDefault()
        setPk(prev=>(parseInt(prev)+1).toString());
    }
  return (
    <div>
        <Form className='signUpForm'>
            <div style={{display:pk === '3' ? '' : 'none'}}>
                <h4 style={{fontFamily:'verdana', fontSize:'1rem', fontWeight:'600', color:"#909191"}}>Education</h4>
                <Form.Group className="mb-3" controlId="formBasicTextFirst" style={{paddingBottom:"1rem"}}>
                    <Form.Control type="text"/>
                </Form.Group>
            </div>
            <div>
                <h4 style={{fontFamily:'verdana', fontSize:'1rem', fontWeight:'600', color:"#909191"}}>
                    {pk === '1' ? 'Email' : pk === '2' ? 'Contact' : 'Job Title'}</h4>
                <Form.Group className="mb-3" controlId="formBasicText" style={{paddingBottom:"1rem"}}>
                    <Form.Control onChange={e => pk === '1' && setValue(prev=> ({...prev, email:e.target.value}))}  type={pk === "1" ? "email" : 'text'}/>
                </Form.Group>
            </div>
            <div>
                <h4 style={{fontFamily:'verdana', fontSize:'1rem', fontWeight:'600', color:"#909191"}}>
                    {pk === '1' ? 'Password' : pk === '2' ? 'Location' : 'Years of Experience'}</h4>
                <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"1rem"}}>
                    <Form.Control onChange={e => pk === '1' && setValue(prev=> ({...prev, password:e.target.value, password2:e.target.value}))} type={pk === '1' ? 'password' : 'text'}/>
                </Form.Group>
            </div>
            <p style={{textAlign:'center', fontWeight:'600', fontFamily:'sans-serif', color:"#A6A5A5", display:pk > 1 ? "none" : ''}}>Must be 8 or more characters and contain at least 1 number and 1 special character</p>
            <Button variant="primary" type="submit" className='signUpBtn' onClick={() => pk < '3' && handleIncrease()}>
                Next
            </Button>
        </Form>
    </div>
  )
}

export default SignUpUserData