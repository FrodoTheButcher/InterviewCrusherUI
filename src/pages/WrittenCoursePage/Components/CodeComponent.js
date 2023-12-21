import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { runWrittenCourseCode } from '../../../actions/writtenCourse'
import ErrorPrinter from '../../../actions/errorPrinter'
import Loader from '../../../components/Spinner'
import Editor from './Editor'
import WhiteButton from '../../../components/WhiteButton'

const CodeComponent = ({code,writtenCourseId,setClickedComponentToRunCode,clickedComponentToRunCode}) => {
    const {loading:loadingRunCode,error:errorRunCode,data:dataRunCode} = useSelector(state=>state.runWrittenCourseReducer)
    const dispatch = useDispatch()
    function decodeBase64(encodedString) {
      try {
          const decodedString = atob(encodedString);
          return decodedString;
      } catch (error) {
          console.error("Error decoding base64:", error.message);
          return null;
      }
  }
  
  return (
    <Container           style={{marginTop:'4em'}}        key={code?.id}>
    <Container>
    <strong>{code?.title}</strong>
    {loadingRunCode  && clickedComponentToRunCode==code.id? <Loader/> : errorRunCode && clickedComponentToRunCode==code.id ? <ErrorPrinter>{errorRunCode}</ErrorPrinter> : dataRunCode && clickedComponentToRunCode==code.id ? <p>{decodeBase64(dataRunCode)}</p>
    :
   
    <Editor code={code?.code}/>
}
  <WhiteButton onClick={()=>{dispatch(runWrittenCourseCode(writtenCourseId,code.id));setClickedComponentToRunCode(code.id)}} small={true} text={"Run code"}/>
    </Container>
    <Container>
      {code.explanation}
    </Container>
  </Container>
  )
}

export default CodeComponent
