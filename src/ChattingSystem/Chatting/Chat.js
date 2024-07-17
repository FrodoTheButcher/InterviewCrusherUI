import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomContext from '../../Context/ContextProvider';
import { Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  getChattingQuestionsAction } from '../../actions/documentation';
import Loader from '../../components/Spinner';
import ErrorPrinter from '../../actions/errorPrinter';
import { primaryBlue, primaryGray, secondaryGray } from '../../Static/Colors';
import Options from '../Components/Options';
import { Link } from 'react-router-dom';

export default function Chat() {
    const {chattingClicked:open,setChattingClicked:setOpen} = React.useContext(CustomContext)
    const [selectedQuestions,setSelectedQuestions]=React.useState([])
    const getChattingQuestions = useSelector(state=>state.getChattingQuestionsReducer)
    const {loading,data,error} = getChattingQuestions
    const getChattingQuestionAnswer = useSelector(state=>state.getChattingQuestionAnswerReducer)
    const {data:dataAnswer,loading:answersLoading,error:answersError} = getChattingQuestionAnswer
  return (
    <React.Fragment>
      {loading || answersLoading ? <Loader/> : error ? <ErrorPrinter>{error}</ErrorPrinter> : answersError ? <ErrorPrinter>{answersError}</ErrorPrinter>:
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <Options selectedQuestions={selectedQuestions}  setSelectedQuestions={setSelectedQuestions}/>
        <DialogTitle id="alert-dialog-title">
          {"Chat with us"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText   sx={{
            width:'25em',
            height:'40em',
            position:'relative',
        }} id="alert-dialog-description">
               {selectedQuestions?.map((item,index)=>{
                        return(
                          <React.Fragment key={index}>
                          <Col style={{backgroundColor:'#1CABFC',fontWeight:'bolder',marginLeft:'5%',marginTop:'5em',width:'80%',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}  >
                        <Button key={index} sx={{color:'white'}} >{item?.question}</Button> 
                      
                        </Col>
                        <Col   style={{backgroundColor:'white',color:primaryGray,fontWeight:'500',marginLeft:'25%',marginTop:'2em',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >{item?.answer}
                        {item?.documentation &&
                         <small ><Link to={`/documentation/${item.documentation}`} style={{color:primaryBlue}} >more...</Link></small>
                        }
                        </Col>
                        
                            </React.Fragment>        
                        )
                })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  }
    </React.Fragment>
  );
}
