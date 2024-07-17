import { Box, Container, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getWrittenCourseById, runWrittenCourseCode, updateUserCourseBackupAction } from '../../../actions/writtenCourse'
import Loader from '../../../components/Spinner'
import ErrorPrinter from '../../../actions/errorPrinter'
import { primaryBlue, primaryGray, secondaryGray } from '../../../Static/Colors'
import WhiteButton from '../../../components/WhiteButton'
import PaginationLink from './Pagination'
import Editor from './Editor'
import CodeComponent from './CodeComponent'
import { addBlueColorToUppercase } from './AddColor'

const ContentPage = () => {
    const {coursePk : pk,roadmap,page} = useParams()
    const dispatch = useDispatch()
    const {loading,error,writtenCourse} = useSelector(state=>state.getWrittenCourseReducerById)
    const {loading:loadingSave,error:errorSave,data:saveResponse} = useSelector(state=>state.updateUserCourseBackupReducer)
    function splitStringByLastSpace(inputString) {
      const lastSpaceIndex = inputString.lastIndexOf(' ');
    
      if (lastSpaceIndex !== -1) {
        const firstPart = inputString.slice(0, lastSpaceIndex);
        const secondPart = inputString.slice(lastSpaceIndex + 1);
    
        return [firstPart, secondPart];
      } else {
        return [inputString];
      }
    }

   
    const [firstPart,setFirstPart]=useState("")
    const [secondPart, setSecondPart]=useState("")
    const [clickedComponentToRunCode,setClickedComponentToRunCode] = useState(null)
    useEffect(()=>{
      dispatch(getWrittenCourseById(pk))
    },[pk])
    useEffect(()=>{
       if(writtenCourse?.name)
       {
        const name = writtenCourse?.name;
        const [firstPart, secondPart] = splitStringByLastSpace(name);
        setFirstPart(firstPart)
        setSecondPart(secondPart)
       }
    },[loading,error,writtenCourse])
    if(loading || !writtenCourse)
    {
      return (
        <Loader/>
      )
    }
    if(error)
    {
      return (
        <ErrorPrinter>
          {error}
        </ErrorPrinter>
      )
    }    
    
  return (
    <>
    
     <div className='WrittenCourse' style={{width:'100vw', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
    <div style={{marginTop:'2em'}}>
      <h2><strong style={{color:primaryGray}}>{firstPart}</strong> <strong style={{color:primaryBlue}}> {secondPart}</strong></h2>
      <p>{writtenCourse.description}</p>
      {writtenCourse.summaryCodes?.map(code =>
       <CodeComponent runnableCode={code.runnableCode} clickedComponentToRunCode={clickedComponentToRunCode} setClickedComponentToRunCode={setClickedComponentToRunCode} code={code} writtenCourseId={writtenCourse.id}/>
      )}
      <Container style={{color:secondaryGray,marginTop:'5em'}}>
        <h1 style={{textDecoration:'underline'}} >At the end...</h1>
      <h5>{addBlueColorToUppercase(writtenCourse?.finalSummary, primaryBlue)}</h5>
      <WhiteButton onClick={()=>dispatch(updateUserCourseBackupAction(roadmap,page,pk))} extraSmall={true} text={"Save"} />
      </Container>
    </div>
  </div>
  <PaginationLink/>
    </>
   
  
  )
}

export default ContentPage
