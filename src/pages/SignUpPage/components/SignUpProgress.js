import React from 'react'

const SignUpProgress = (pk) => {
  return (
    <div className='signUpProgressBtn'>
        <div className='signUpProgressCircle' style={{backgroundColor:(pk==='1') ? '#4FB1EA' : (pk > '1' ? '#32CB78' : 'lightgray')}}>
            <p className='signUpProgressCircleText' style={{display:pk==='1' ? '' : 'none'}}>1</p>
        </div>
        <div className='signUpProgressCircle' style={{backgroundColor:(pk==='2') ? '#4FB1EA' : (pk > '2' ? '#32CB78' : 'lightgray')}}>
            <p className='signUpProgressCircleText' style={{display:pk<='2' ? '' : 'none'}}>2</p>
        </div>
        <div className='signUpProgressCircle' style={{backgroundColor:(pk==='3') ? '#4FB1EA' : (pk > '3' ? '#32CB78' : 'lightgray')}}>
            <p className='signUpProgressCircleText' style={{display:pk<='3' ? '' : 'none'}}>3</p>
        </div>
    </div>
  )
}

export default SignUpProgress