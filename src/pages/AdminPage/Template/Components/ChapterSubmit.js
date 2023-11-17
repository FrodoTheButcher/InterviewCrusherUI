import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Video from './Chapter/Video'
import  Quiz from  './Chapter/Quiz'
import Algorithm from './Chapter/Algorithm'

const ChapterSubmit = ({setRoadmap,setStep}) => {

  const [chapterstep,setChapterStep]=useState(0)
  const [chapter,setChapter]=useState({})
  useEffect(()=>{
    console.log("chapter",chapter)
  },[chapter])

  const handleSaveChapter = () => {
    setRoadmap((prev) => ({
      ...prev,
      chapters: [...(prev?.chapters || []), chapter],
    }));
    setStep(1)
    setChapter({})
    setChapterStep(0)
  }
  return (
           <>
           {
            chapterstep == 0 ?
            <Video setChapterStep={setChapterStep} setChapter={setChapter} />
            :
            chapterstep == 1 ?
          <Quiz setChapterStep={setChapterStep} setChapter={setChapter}/>
          :
          chapterstep == 2 ?
          <Algorithm setChapterStep={setChapterStep} setChapter={setChapter} />
          :
          <Button onClick={()=>handleSaveChapter()}>
            save chapter
          </Button>
           }
           </>
  )
}

export default ChapterSubmit
