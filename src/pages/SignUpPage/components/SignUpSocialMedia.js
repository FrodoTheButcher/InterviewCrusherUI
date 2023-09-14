import React from 'react'
import {Link} from 'react-router-dom'
const SignUpSocialMedia = (pk) => {
  return (
    <>
        <div className='signUpOrDiv' style={{display:pk > 1 ? "none" : ''}}>
            <hr className='signUpOrDevider'></hr>
            <div className='signUpOrIcon'>OR</div>
            <hr className='signUpOrDevider'></hr>
        </div>
        <div className='signUpConnectSocialMedia' style={{display:pk > 1 ? "none" : ''}}>
            <div className='signUpConnectCircle'  style ={{backgroundColor:'#4fb1ea'}}>
                <div className='signUpConnectCircleText'>G</div>
            </div>
            <div className='signUpConnectCircle' style={{display:pk > 1 ? "none" : ''}}>
                <div className='signUpConnectCircleText'>f</div>
            </div>
        </div>
        <div style={{display:pk === '1' ? "none" : '', textAlign:'center', padding:'2rem', fontWeight:'600', fontSize:'1.2rem', fontFamily:'verdana'}}>
            <Link to={`/login/signUp/${(pk > 1) ? parseInt(pk) - 1 : 1}`}>Back</Link>
        </div>
    </>
  )
}

export default SignUpSocialMedia