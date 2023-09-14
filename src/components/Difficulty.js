import React from 'react'
import {HARD} from '../Constants/DifficultyConstants'
import { MODERATE } from '../Constants/DifficultyConstants'


const Difficulty = ({ Difficulty, Fontsize }) => {
  return (
    <p style={{ fontWeight: 'bolder', fontSize:`${Fontsize}`,textAlign:'center',color:`${Difficulty === HARD ? "red" :  Difficulty === MODERATE ?  "blue" : "green"}`}}>
        {Difficulty}
    </p>
  )
}

export default Difficulty
