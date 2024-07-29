import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentQuizBadAnswers } from '../../actions/quizActions'
import Loader from '../../components/Spinner'
import QuizAnswers from './components/QuizAnswers'
import AceEditor from "react-ace";
import { Col, Container, Row } from 'react-bootstrap'
import WhiteButton from '../../components/WhiteButton'
import { useNavigate, useParams } from 'react-router-dom'
import { EntitiesChoices } from '../../constants'
import { getAlgoSolutions } from '../../actions/algorithmAction'
import { primaryBlue } from '../../Static/Colors'
import RatingMUI from '../../components/Rating'
import ProposeAlgorithmDialog from '../AlgoritmPage/Components/ProposeAlgorithmDialog'
import { userProposeAlgoSolution } from '../../actions/userAction'
import CustomizedSnackbars from '../../components/CustomizedSnackbars'
import UserProposedSolutionAlgo from '../AlgoritmPage/Components/UserProposedSolutionAlgo'
const Redirect = () => {
  const {chapterid,templateid,exercise_type} = useParams()
  const dispatch = useDispatch();
  useEffect(()=>{
    if(exercise_type==EntitiesChoices.QUIZ)
    dispatch(getCurrentQuizBadAnswers(chapterid,templateid))
  else if(exercise_type == EntitiesChoices.ALGORITHM)
  {
    dispatch(getAlgoSolutions(templateid))
  }
  },[])
const obj = useSelector(state=>state.getUserCurrentQuizBadAnswersReducer)
  const {data,loading,error} = useSelector(state=>state.getUserCurrentQuizBadAnswersReducer)
  const {data:dataAlgo,loading:loadingAlgo,error:errorAlgo} = useSelector(state=>state.getAlgoSolutionsReducer)
  const [open,setOpen]=useState(false)
  const obj2 = useSelector(state=>state.handleUserProposeSolutionToAlgoReducer)
  const {data:dataPropose,loading:loadingPropose,error:errorPropose} = useSelector(state=>state.handleUserProposeSolutionToAlgoReducer)
  const [newAlgoData,setNewAlgoData] = useState()
  const [displaySnack,setDisplaySnack]=useState(true)

  const navigate = useNavigate()


  useEffect(()=>{
    console.log("obj",obj2)
  },[obj2])
  if(loading || loadingAlgo || loadingPropose)
  return (
<Loader/>)

 


  if(exercise_type==EntitiesChoices.QUIZ)
  return (
    <Container style={{marginTop:'5rem'}}>
       {
        error &&
         <CustomizedSnackbars severity={"danger"} resetData={setDisplaySnack} isOpen={displaySnack} message={error} />
        
      }
      {loading && <Loader/>}
      <Container fluid style={{display:'flex',justifyContent:'space-around'}}>
        {obj.data?.answers_data && obj.data?.answers_data.map(quizAnswers=>
              <QuizAnswers quizData={obj.data.quiz_data} quizAnswers={quizAnswers}/>
        )}
      
      </Container>
          <Row style={{width:'100%'}}>
           <WhiteButton onClick={()=>{
            navigate("/RoadMapPage")
           }} text={"Go back"}/>
         </Row>
    </Container>
  )
  else 
    return (
  <Container fluid style={{width:'100vw',height:'50vh'}}>
     {
        errorAlgo &&
         <CustomizedSnackbars severity={"danger"} resetData={setDisplaySnack} isOpen={displaySnack} message={errorAlgo} />
        
      }
      <Row style={{width:'100%',height:'100%'}}>
      {
        dataAlgo?.map(e=>
          <Col>
          <h1 style={{color:primaryBlue}}>Solution 1</h1>
          <RatingMUI value={e.stars_out_of_five}  />
          <AceEditor
            mode="c_cpp"
            theme="eclipse"
            editorProps={{ $blockScrolling: true }}
            value={e.solutionB64}
            highlightActiveLine={true}
            enableBasicAutocompletion={true}
            focus={true}
            fontSize={"1rem"}
            height="60%"
            width='100%'
        />
          </Col>
          )
      }
      </Row>
      <Row style={{width:'100%'}}>
           <WhiteButton onClick={()=>{
            navigate("/RoadMapPage")
           }} text={"Go back"}/>
           <WhiteButton onClick={()=>{
            setOpen(prev=>!prev)
           }} text={"Add your own solution"}/>
        </Row>
        <UserProposedSolutionAlgo  setAlgorithmInput={setNewAlgoData} onSubmit={()=>{
          dispatch(userProposeAlgoSolution(newAlgoData,templateid))
        }} isOpen={open} setIsOpen={setOpen}/>
      {
        errorPropose ?
         <CustomizedSnackbars severity={"danger"} resetData={setDisplaySnack} isOpen={displaySnack} message={errorPropose} />
         :
         dataPropose &&
         <CustomizedSnackbars severity={"success"} resetData={setDisplaySnack} isOpen={displaySnack} message={dataPropose} />
      }

  </Container>)
}

export default Redirect
