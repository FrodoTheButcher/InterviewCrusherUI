import React, { useState } from 'react'
import './components/SignUp.css'
import SignUpUserData from './components/SignUpUserData';
import SignUpProgress from './components/SignUpProgress';
import SignUpSocialMedia from './components/SignUpSocialMedia';
import SignUpHeader from './components/SignUpHeader';
import { useParams } from 'react-router-dom';

const SignUp = () => {
  const [pk, setPk]=useState('1')

  return (
    <div className='signUpContainer'>
        <div className='signUpComponent'>
            {SignUpHeader(pk)}
            {SignUpProgress(pk)}
            {SignUpUserData(pk,setPk)}
            {SignUpSocialMedia(pk,setPk)}
        </div>
    </div>
  )
}

export default SignUp