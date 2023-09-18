import React, { useEffect, useState } from 'react'

const SignUpHeader = (progressParam) => {
  const [progress, setProgress] = useState(progressParam)
  
  useEffect(() => {
    setProgress(progressParam)
  }, [progressParam])

  return (
    <div className='signUpHeader'>
        <h3 className='signUpHeaderText'>Sign Up</h3>
        <h3 className='signUpHeaderText' style={{display:(progress > 0 ? 'none' : "")}}>Login</h3>
    </div>
  )
}

export default SignUpHeader