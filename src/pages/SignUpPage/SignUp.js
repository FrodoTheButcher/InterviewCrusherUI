import React, { useState } from 'react'
import './components/SignUp.css'
import SignUpUserData from './components/SignUpUserData';
import SignUpProgress from './components/SignUpProgress';
import SignUpSocialMedia from './components/SignUpSocialMedia';
import SignUpHeader from './components/SignUpHeader';
import { useParams } from 'react-router-dom';

const SignUp = () => {
  const [progress, setProgress]=useState(0)
  

  return (
    <div className='signUpContainer'>
        <div className='signUpComponent'>
            <SignUpProgress progressParam={progress} />
            <SignUpUserData progressParam={progress} setProgressParam={setProgress} />
            <SignUpSocialMedia progressParam={progress} setProgressParam={setProgress} />
        </div>
    </div>
  )
}

export default SignUp