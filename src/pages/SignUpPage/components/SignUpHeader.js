import React from 'react'

const SignUpHeader = (pk) => {
  return (
    <div className='signUpHeader'>
        <h3 className='signUpHeaderText'>Sign Up</h3>
        <h3 className='signUpHeaderText' style={{display:(pk > '1' ? 'none' : "")}}>Login</h3>
    </div>
  )
}

export default SignUpHeader