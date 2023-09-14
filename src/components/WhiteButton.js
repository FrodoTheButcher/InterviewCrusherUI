import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './WhiteButton.css'
const WhiteButton = ({ onClick, text, widthlen, heightlen ,small}) => {
  return (
    <Button
      onClick={onClick}
      className='Btn-Hover'
      style={{
        height: heightlen,
        marginTop: '1em',
        fontSize: `${small ? "1rem" : "1.5rem"}`, // Corrected line
        background: 'white',
        width: widthlen,
        fontWeight: 'bold',
        borderColor: '#B2C0CF',
      }}
    >
      {text}
    </Button>
  )
}

export default WhiteButton
