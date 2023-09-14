import React from 'react'
import LoginSignIn from './Components/LoginSignIn'
import LoginSignUp from './Components/LoginSignUp'

const LoginPage = () => {
  return (
    <>
    <div className="containerLogin">
        <LoginSignIn/>
        <LoginSignUp/>
    </div>
    </>
  )
}

export default LoginPage