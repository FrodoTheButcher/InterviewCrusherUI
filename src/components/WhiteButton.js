import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './WhiteButton.css'
const WhiteButton = ({ marginBottom, marginTop, onClick, text, widthlen, heightlen ,small,color}) => {
  return (
    <Button
      onClick={onClick}
      className='Btn-Hover'
      style={{
        height: heightlen,
        marginTop: '1em',
        fontSize: `${small ? "0.8rem" : "1.5rem"}`, // Corrected line
        background: 'white',
        width: widthlen,
        fontWeight: 'bold',
        borderColor: '#B2C0CF',
        color:color
      }}
    >
      {text}
    </Button>
  )
}

export default WhiteButton
