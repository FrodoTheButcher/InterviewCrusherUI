import * as React from 'react';
import List from '@mui/material/List';

import {useSelector} from "react-redux"
import {ErrorPrinter} from "../../../actions/errorPrinter"
import Loader from "../../../components/Spinner"

import CommentAnswer from './CommentAnswer';
export default function CommentSection() {
  const { loading, data, error } = useSelector((state) => state.getAlgoQuestionCommentsReducer);
  if(loading)
  {
    return (
      <Loader/>
    )
  }
  else if(error)
  {
    return (
      <ErrorPrinter>
        {error}
      </ErrorPrinter>
    )
  }



  return (
    
    <List sx={{ width: '100%',  bgcolor: 'background.paper' ,marginTop:'5em'}}>
      {data.map(e=>
        <CommentAnswer e={e} />
        )}
    </List>
  );
}