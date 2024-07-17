import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Spinner';
import ErrorPrinter from '../../actions/errorPrinter';
import { primaryBlue } from '../../Static/Colors';
import { getChattingQuestionAnswerAction, getChattingQuestionsAction } from '../../actions/documentation';

export default function Options({setSelectedQuestions,selectedQuestions}) {
    const [questions,setQuestions] = React.useState(null)
    const dispatch = useDispatch()

  const getChattingQuestions = useSelector(state=>state.getChattingQuestionsReducer)
  const {loading,data,error} = getChattingQuestions
  const getChattingQuestionAnswer = useSelector(state=>state.getChattingQuestionAnswerReducer)
  const {data:dataAnswer} = getChattingQuestionAnswer
  React.useEffect(()=>{
    if(questions == null && data)
      setQuestions(data)
  },[data])


  React.useEffect(()=>{
    if(dataAnswer)
    {
      let alreadyAdded = selectedQuestions.find(question=>question.id===dataAnswer.id)
      if(!alreadyAdded)
        {
          setSelectedQuestions(prev=>[...prev,dataAnswer])
        }
    }
  },[dataAnswer])
  

  return (
    <Box sx={{ minWidth: 120,marginTop:'1em' }}>
      <FormControl fullWidth>
        <InputLabel  id="demo-simple-select-label" sx={{color:primaryBlue}}>Questions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedQuestions}
          label="Questions"
        >
            {questions?.map((item,index)=>{
                return(
                <MenuItem onClick={()=>{
                    dispatch(getChattingQuestionAnswerAction(item.id))
                }} key={index} value={item.id}>{item?.question}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </Box>
  );
}