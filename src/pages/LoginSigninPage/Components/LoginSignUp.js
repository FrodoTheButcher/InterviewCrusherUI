import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import './Login.css'
import { Link, useFetcher } from 'react-router-dom';

import { useContext } from 'react';
import { CustomAuth, CustomAuthProvider } from '../../../Context/LoginContext';
import { useNavigate } from 'react-router-dom';
const LoginSignUp = () => {

  const {user}=useContext(CustomAuth)
  const navigate = useNavigate();

  useEffect(()=>{

    if(user !== null)
    {
      navigate('/')
    }

  },[user])

  return (
    <div className="signUp-container">
      <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
        <h2 style={{padding:'1.2rem'}}>New Here?</h2>
        <h5 style={{padding:'0.8rem'}}>Sign Up Today And Join Out Growing Community</h5>
        <Button variant="primary" type="submit" className='signUp-btn' style={{backgroundColor:'white', color:'#195186', fontWeight:'600', fontSize:'1.3rem', borderColor:'white'}}>
          <Link to={'/login/signUp'} style={{textDecoration:'none',color:'black',fontWeight:'600'}}>
                   Sign Up
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default LoginSignUp