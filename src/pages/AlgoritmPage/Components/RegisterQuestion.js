// Import necessary dependencies
import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import WhiteButton from '../../../components/WhiteButton';
import { useDispatch, useSelector } from 'react-redux';
import { handleUserCreatesAlgorithmQuestion } from '../../../actions/userAction';
import { useParams } from 'react-router-dom';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import { ROADMAP_RESET } from '../../../Constants/roadmap';

// Define the functional component
const RegisterQuestion = () => {
  // State to store form data
  const {contentId} = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    algorithm_id:contentId
  });
 
  const [raiseError,setRaiseError] = useState("")
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const {loading,error,data}=useSelector(state=>state.handleUserRegisterAlgorithmQuestionReducer)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name ==="" || formData.description === "")
    {
      setRaiseError("Name and description should be provided")
      return;
    }
    
    dispatch(handleUserCreatesAlgorithmQuestion(formData.algorithm_id,formData.name,formData.description))

    dispatch({type:ROADMAP_RESET})
  };

  return (
    <Form onSubmit={handleSubmit}>
      {loading ? 
      
        <Spinner/>
        :
        error ? 
        <CustomizedSnackbars isOpen={true}  severity={"danger"} message={error}  />
        
        :
        raiseError ? 
        <CustomizedSnackbars isOpen={raiseError} resetData={setRaiseError} severity={"danger"} message={raiseError}  />
        :
        data && 
        <CustomizedSnackbars  isOpen={true} severity={"success"}  message={data}  />
    }
      <Form.Group controlId="formName">
        <Form.Label>Question</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your question"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter a description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </Form.Group>

     <WhiteButton onClick={handleSubmit} text={"submit"} small={true} />
    </Form>
  );
};

export default RegisterQuestion;
