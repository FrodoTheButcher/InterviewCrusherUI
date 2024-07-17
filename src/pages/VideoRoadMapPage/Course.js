import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Content from './Components/Content'
import { useDispatch } from 'react-redux'
import { primaryBlue, secondaryGray } from '../../Static/Colors'
import WhiteButton from '../../components/WhiteButton'
import { useParams } from 'react-router-dom'
import { handleDeletePointsForSkippingContent, roadmapGetCurrentChapter } from '../../actions/roadmapGetAllAction'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import Loader from '../../components/Spinner'
import Message from '../../components/Message'
import VideoCourse from './Components/VideoCourse'
import QuizPage from '../QuizPageComponent/QuizPage'
import AlgoritmPage from '../AlgoritmPage/AlgoritmPage'
import { useNavigate } from 'react-router-dom'
import './courseNavBar.css'
import RightPopUp from './Components/RightPopUp'
import PopupReview from '../../components/PopupReview'
import ReusablePopup from '../../components/ReusablePopup'
import CustomizedSnackbars from '../../components/CustomizedSnackbars'
import { colors } from '@mui/material'
import { ROADMAP_RESET } from '../../Constants/roadmap'
import { userReviewAction } from '../../actions/userAction'
const Course = () => {

  const roadmapItem = useSelector(state=>state.roadmapItem)
  const {roadmap : currentChapter}=roadmapItem
  const [firstTimeLoading,setFirstTimeLoading]=useState(true)
  const [showReviewType,setShowReviewType]=useState(false)
  const navigate = useNavigate()
  const { roadmapId, chapterId, contentId, type, roadmapName }  = useParams();
  const dispatch = useDispatch();
  const roadmapItemData = useSelector(state => state.roadmapItem)

  const { loading, error, roadmap } = roadmapItemData;
 
  const userAgreesToSkipContent = useSelector(state => state.handleDeletingCoinsYouMissToSkipReducer)

  const { loading:loadingUserAgreesToSkipContent, error:errorUserAgreesToSkipContent, data:dataUserAgreesToSkipContent } = userAgreesToSkipContent;
  const {loading:loadingReview,error:errorReview,data:dataReview} = useSelector(state=>state.userReviewReducer)


  useEffect(() => {
    if(!roadmap)
    dispatch(roadmapGetCurrentChapter(roadmapId));
  }, [roadmapId,chapterId,type,roadmapName,contentId,dispatch,roadmap]);
 
  useEffect(()=>{
    if(roadmap)
    navigate(`/${roadmap.title}/${roadmap.id}/${currentChapter?.chapter?.chapterId}/${currentChapter?.chapter?.contentType}/${currentChapter?.chapter?.currentId}`)
  },[roadmap])

  const handleReview = async (rate)=>{
    dispatch(userReviewAction({ id: contentId, type: type, rateOutOfFive: rate }))
    setShowReviewType(false)
  }
  useEffect(() => {
    console.log("type",type,"time",firstTimeLoading)
    if (type && firstTimeLoading === false) {
        let timeoutId = setTimeout(() => {
            setShowReviewType(true);
        }, 5000);
        return () => clearTimeout(timeoutId);
    } else if (type && firstTimeLoading === true) {
        setFirstTimeLoading(false);
    }
}, [type]);


const [userAcceptsToSkipContentData,setUserAcceptsToSkipContentData] = useState(null)
const handleUserAcceptsToSkipContent = async (e)=>{
  if(userAcceptsToSkipContentData)
  {
    dispatch(handleDeletePointsForSkippingContent(userAcceptsToSkipContentData.roadmapId,userAcceptsToSkipContentData.contentType,userAcceptsToSkipContentData.exerciseToSkipId))
  }
}
useEffect(()=>{
  dispatch({type:ROADMAP_RESET})
},[dataUserAgreesToSkipContent])
 
const getPointsYouLoseSkippingContentState = useSelector(state=>state.getPointsYouLoseSkippingContentReducer)
const {loading:loadingPointsToLose,error:errorPointsToLose,data} = getPointsYouLoseSkippingContentState
if(loading)
return (
  <Container style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><Loader/></Container>
)
  return (

    <section style={{width:'100vw',display:'flex'}}>
      {loadingPointsToLose || loadingReview ?  <Container style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><Loader/></Container> : errorPointsToLose ?
      <CustomizedSnackbars severity={"danger"} message={errorPointsToLose} isOpen={true} />:
      errorReview ?
      <CustomizedSnackbars severity={"danger"} message={errorReview} isOpen={true} />:
       dataReview ?
      <CustomizedSnackbars severity={"success"} message={dataReview} isOpen={true} />:
      (data !== undefined && data !== null) ?
      

      <ReusablePopup isOpen={true}  onClick = {handleUserAcceptsToSkipContent}  title={"Be carefull.."} >
        You sure you want to skip over all the exercises? This is going to remove <strong style={{color:'red'}}>{data.pointsToRemove}</strong> points...`
        You have currently: <strong style={{color:primaryBlue}}>{data.userPoints}</strong>
      </ReusablePopup>      :
      <></>
    }
    {loadingUserAgreesToSkipContent ?  <Container style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><Loader/></Container> : errorUserAgreesToSkipContent ?
  <CustomizedSnackbars severity={"danger"} message={errorUserAgreesToSkipContent} isOpen={true} />:
  (dataUserAgreesToSkipContent !== undefined && dataUserAgreesToSkipContent !== null) ?
  <CustomizedSnackbars severity={"success"} message={dataUserAgreesToSkipContent} isOpen={true} />:  
  <></>
  }
      <PopupReview isOpen={showReviewType} onClick={handleReview} />
      {loading ? <Container style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><Loader/></Container> : error? <Message variant={'danger'}>{error}</Message> :
      roadmap && 
      <>
          {type === "Video" ? 
            <VideoCourse  videos = {roadmap?.chapter?.videos}/>
            :
             type ==="Quiz"?
              <QuizPage   quizes = {roadmap?.chapter?.quizez} />
            :
              <AlgoritmPage   algorithms = {roadmap?.chapter?.algorithms} />
          }
            <RightPopUp setUserAcceptsToSkipContentData={setUserAcceptsToSkipContentData} type={type} roadmap={roadmap}/>
      </>
      }
    
    </section>
  )
}

export default Course
