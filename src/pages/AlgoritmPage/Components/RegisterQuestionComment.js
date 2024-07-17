import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import WhiteButton from '../../../components/WhiteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getAlgoQuestionComments, handleUserCreatesAlgoQuestionComment } from '../../../actions/userAction';
import Loader from '../../../components/Spinner';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';

const RegisterQuestionComment = ({isOpen=false,setIsOpen,id}) => {
  const [comment, setComment] = useState('');
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    setOpen(isOpen)

    if(isOpen)
    {
      dispatch(getAlgoQuestionComments(id))
    }
  },[isOpen])
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleUserCreatesAlgoQuestionComment(id,comment))
  };

  if(!open)
  {
    return (
      <></>
    )
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Group>

        <WhiteButton onClick={handleSubmit} extraSmall={true} text={"submit"} />
      </Form>
    </Container>
  );
};

export default RegisterQuestionComment;
