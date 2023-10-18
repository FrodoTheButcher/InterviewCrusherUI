import React, { useEffect, useState } from 'react'

const SignUpProgress = ({progressParam}) => {
const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(progressParam)
  }, [progressParam])
  
  return (
    <div className='signUpProgressBtn'>
        <div className='signUpProgressCircle' style={{backgroundColor:(progress===0) ? '#4FB1EA' : '#32CB78'}}>
            <p className='signUpProgressCircleText'>1</p>
        </div>
        <div className='signUpProgressCircle' style={{backgroundColor:(progress===1) ? '#4FB1EA' : (progress > 1 ? '#32CB78' : 'lightgray')}}>
            <p className='signUpProgressCircleText'>2</p>
        </div>
        <div className='signUpProgressCircle' style={{backgroundColor:(progress===2) ? '#4FB1EA' : (progress > 2 ? '#32CB78' : 'lightgray')}}>
            <p className='signUpProgressCircleText' >3</p>
        </div>
    </div>
  )
}

export default SignUpProgress