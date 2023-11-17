import React, { useEffect, useState } from 'react'
import TemplateSubmit from '../TemplateSubmit'
import { Container } from 'react-bootstrap'
import ChapterSubmit from './ChapterSubmit'

const TemplatePage = () => {
    const [roadmap,setRoadmap]=useState({title:"",description:"",avarageTimeToFinish:"",video:"",chapters:[]})

    useEffect(()=>{
        console.log(roadmap)
    },[roadmap])
    const [step,setStep]=useState(0)
  return (
    <Container style={{background:'black',width:'100vw',height:'100vh'}} fluid>
        {
            step == 0 ?
            <TemplateSubmit setStep={setStep} setRoadmap={setRoadmap} />
            :
            <ChapterSubmit setRoadmap={setRoadmap} setStep={setStep} />
        }
    </Container >
  )
}

export default TemplatePage
