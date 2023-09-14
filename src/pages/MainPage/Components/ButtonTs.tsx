import React, { MouseEventHandler } from 'react'


type Props = {
  onClick: MouseEventHandler,
  text: string,
}

const ButtonTs = ({ onClick, text }: Props) => (
  <button onClick={onClick} style={{width:50, height:50}}>
    {text}
  </button>
)

export default ButtonTs;